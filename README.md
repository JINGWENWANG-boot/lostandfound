# lostandfound

1. Prepare the environment before deployment
Install python 3.9, pycharm, vscode, node, phpstudy, SQLyog.
Start MySQL in phpstudy and see the green triangle
Connect to the MySQL server through the MySQL client and log in successfully
2. Import the database SQL file: db_lostfoundmgr_sys.sql
3. Import the backend project (admin) into Pycharm and configure the virtual environment
File-->Open--->Find the path of the project
Add Interpreter in the lower right corner of Pycharm and use python3.9
4. Install the requirements.txt package
pip3 install -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple/
5. Start the admin backend project
Add the runserver parameter (script parameter) to the run command
Run manage.py
6. Import the frontend project (front) into VsCode and run the project
File-->Open--->Find the path of the project
Double-click package.json and click Run dev command (or npm run dev in the VsCode command line)
7. Administrator account: admin Password: admin
User 1 account: zhangsan Password: 123456
User 2 account: lisi Password: 12345
Technology stack:
Backend: Django (the backend is separated into frontend and backend)
Frontend: Vue.js + ElementUI

### Development tools:    
Python3.9 or above + Pycharm + MySQL5.7/MySQL8 + VSCode
