# HiwJung

web hiw hiw for human hiw

## SignUp

1. Email
    - Picture Profile 
    - Email (อีเมล์)
    - Name (ชื่อ)
    - Password (รหัสผ่าน)
    - Gender (เพศ)
        - Male (ชาย)
        - Female (หญิง)
        - Other (ไม่ระบุ)
    - checkbox : subscription email

Path 

local/guest2?_f=signup

## Authentication 

1. Facebook
2. Gmail
3. Line
4. Twitter

Path View

clinet : local/guest2/login
server : /api/guest2/login


> DB.js

```js
module.exports = {
    DB: 'mongodb://url'
}
```