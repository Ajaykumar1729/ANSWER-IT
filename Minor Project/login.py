from flask import Flask,render_template,request,session,url_for,redirect,jsonify
import mysql.connector

app = Flask(__name__)
app.secret_key="12345678"

conn=mysql.connector.connect(host="localhost",user="root",password="pksba75457",database="projects")
cursor=conn.cursor()

Us_list=[]
@app.route("/")
def index():    
    return redirect("/login")

@app.route("/Quiz")
def Quiz():
    if 'user_id' in session :
        return render_template("Quiz.html",user=Us_list[0])
    else :
        return redirect('/')

@app.route("/login",methods=['POST','GET']) 
def login():
        msg=" "
        if request.method=='POST' :
            username=request.form.get('username')
            password=request.form.get('password')
            # cursor.execute("""SELECT * FROM users WHERE (Username LIKE '{}' OR Email LIKE '{}')""".format(username,username))
            cursor.execute("""SELECT Username,Email,Password FROM users WHERE (Username=%s OR Email=%s)""",(username,username))
            users=cursor.fetchone()
            print(users[1])
            if users :
                if (users[0]==username or users[1]==username) and users[2]==password :
                    session['user_id']=True
                    Us_list.append(users[0])
                    return redirect(url_for(".Quiz"))
                elif (users[0]==username or users[1]==username) and users[2]!=password :
                    msg='Incorrect Password'
            else :
                msg='Invalid User'
        return render_template("login1.html",msg=msg)

@app.route("/register",methods=['POST','GET'])
def register() :
    msg=" "
    if request.method=='POST' :
        name=request.form.get('name')
        username=request.form.get('username')
        email=request.form.get('email')
        password=request.form.get('password')
        password2=request.form.get('password2')
        cursor.execute('SELECT Username,Email FROM users WHERE Username LIKE "{}" OR Email LIKE "{}"'.format(username,email))
        users=cursor.fetchone()
        if users :
            if users[0]==username:
                msg="Username already exists"
            elif users[1]==email:
                msg="Email already Taken"
        elif password!=password2 :
            msg="Password Doesn't Match"
        else :
            cursor.execute("""INSERT INTO USERS (Username,Name,Email,Password) VALUES('{}','{}','{}','{}')""".format(username,name,email,password))
            conn.commit()
            msg="User successfully registered"
    return render_template("register1.html",msg=msg)

@app.route("/Profile")
def pro():
        username=Us_list[0]
        cursor.execute("SELECT * FROM USERS WHERE Username like '{}' ".format(username))
        users=cursor.fetchone()
        return render_template("profile.html",users=users)

@app.route("/DS",methods=['POST','GET'])
def ds() :
        username=Us_list[0]
        cursor.execute("SELECT DS,DST FROM USERS WHERE Username like '{}' ".format(username))
        users=cursor.fetchone()
        if(users[0]==None):
            return render_template("DS.html") 
        else:
            msg=users
            return render_template('submit.html',msg=msg,username=username)

@app.route("/DBMS",methods=['POST','GET'])
def dbms() :
        username=Us_list[0]
        cursor.execute("SELECT DBMS,DBMST FROM USERS WHERE Username like '{}' ".format(username))
        users=cursor.fetchone()
        if(users[0]==None):
            return render_template("DBMS.html") 
        else:
            msg=users
            return render_template('submit.html',msg=msg,username=username)
        
@app.route("/Python",methods=['POST','GET'])
def pyth() :
        username=Us_list[0]
        cursor.execute("SELECT PY,PYT FROM USERS WHERE Username like '{}' ".format(username))
        users=cursor.fetchone()
        if(users[0]==None):
            return render_template("Python.html") 
        else:
            msg=users
            return render_template('submit.html',msg=msg,username=username)

@app.route("/Java",methods=['POST','GET'])
def java() :
        username=Us_list[0]
        cursor.execute("SELECT JAVA,JAVAT FROM USERS WHERE Username like '{}' ".format(username))
        users=cursor.fetchone()
        if(users[0]==None):
            return render_template("Java.html") 
        else:
            msg=users
            return render_template('submit.html',msg=msg,username=username)

@app.route("/Aptitude",methods=['POST','GET'])
def apt() :
        username=Us_list[0]
        cursor.execute("SELECT AP,APT FROM USERS WHERE Username like '{}' ".format(username))
        users=cursor.fetchone()
        if(users[0]==None):
            return render_template("Apt.html") 
        else:
            msg=users
            return render_template('submit.html',msg=msg,username=username)

@app.route("/DSR",methods=['POST','GET'])
def dsr():
    if request.method == "POST": 
        score={}
        username=Us_list[0]
        score=request.get_json('score')
        marks=int(score['title'])
        time=int(score['sec'])
        subj=int(score['subj'])
        if subj==1:
            cursor.execute(""" UPDATE USERS SET DS=%s,DST=%s WHERE Username=%s OR Email=%s """,(marks,time,username,username))
        elif subj==2:
            cursor.execute(""" UPDATE USERS SET DBMS=%s,DBMST=%s WHERE Username=%s OR Email=%s """,(marks,time,username,username))
        elif subj==3:
            cursor.execute(""" UPDATE USERS SET PY=%s,PYT=%s WHERE Username=%s OR Email=%s """,(marks,time,username,username))
        elif subj==4:
            cursor.execute(""" UPDATE USERS SET JAVA=%s,JAVAT=%s WHERE Username=%s OR Email=%s """,(marks,time,username,username))
        elif subj==5:
            cursor.execute(""" UPDATE USERS SET AP=%s,APT=%s WHERE Username=%s OR Email=%s """,(marks,time,username,username))
        conn.commit()          
        return jsonify(score)

@app.route("/DSLB")
def dslb():
    cursor.execute("select RANK() OVER (ORDER BY DS DESC,DST ASC) AS DSR, Username,Name,DS,DST FROM USERS")
    users=cursor.fetchall()
    conn.commit()
    return render_template("leaderboard.html",users=users)

@app.route("/DBMSLB")
def dbmslb():
    cursor.execute("select RANK() OVER (ORDER BY DBMS DESC,DBMST ASC) AS DBMSR, Username,Name,DBMS,DBMST FROM USERS")
    users=cursor.fetchall()
    conn.commit()
    return render_template("leaderboard.html",users=users)

@app.route("/PyLB")
def pylb():
    cursor.execute("select RANK() OVER (ORDER BY PY DESC,PYT ASC) AS PYR, Username,Name,PY,PYT FROM USERS")
    users=cursor.fetchall()
    conn.commit()
    return render_template("leaderboard.html",users=users)

@app.route("/JALB")
def jalb():
    cursor.execute("select RANK() OVER (ORDER BY JAVA DESC,JAVAT ASC) AS JAVAR, Username,Name,JAVA,JAVAT FROM USERS")
    users=cursor.fetchall()
    conn.commit()
    return render_template("leaderboard.html",users=users)

@app.route("/ApLB")
def aplb():
    cursor.execute("select RANK() OVER (ORDER BY AP DESC,APT ASC) AS DSR, Username,Name,AP,APT FROM USERS")
    users=cursor.fetchall()
    conn.commit()
    return render_template("leaderboard.html",users=users)

@app.route("/ChangePassword",methods=['POST','GET'])
def cp():
    if request.method == "POST":
        mssg=""
        username=Us_list[0]
        password=request.form.get('password')
        password1=request.form.get('password1')
        password2=request.form.get('password2')
        print(username,password,password1,password2)
        cursor.execute(""" SELECT Password from Users where Username LIKE '{}' """.format(username))
        users=cursor.fetchone()
        if(password!=users[0]) :
            mssg=" Incorrect Password ! "
        elif password1!=password2:
            mssg=" New Password Doesn't match ! "
        elif users[0]==password1:
            mssg=" Your Old password can't be your New Password ! "
        else:
            cursor.execute(""" UPDATE USERS SET Password=%s WHERE Username=%s """,(password1,username))
            conn.commit()
            mssg="Password Updated Successfully ! "
        return render_template("changepass.html",mssg=mssg)
            
    else:
        return render_template("changepass.html")

@app.route("/logout")
def logout():
    try :
        session.pop('user_id')
        Us_list.pop()
        msg="Successfully Logged Out"
        return render_template("/login1.html",msg=msg)
    except :
        return redirect("/")

if __name__ == "__main__" :
    app.run(debug=True)