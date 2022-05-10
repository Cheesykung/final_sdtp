FINAL วิชา Software Devtools

วิธีการ run
ให้ใช้ docker container ในการ run เท่านั้น

ขั้นตอน
1. ติดตั้ง repo ทำได้ 2 วิธี
    1 clone โปรเจค git นี้ลงในเครื่อง 
    2. ใช้คำสั่ง docker-compose -f docker-compose-build.yaml build ในตำแหน่งไฟล์ที่ docker-compose-build.yaml นั้นอยู่
    3. `docker pull mongo`

    หรือ

    pull image มาจากใน docker hub ทั้ง 3 ตัว
    `docker pull 62070122/final_sdtp_front-end`
    `docker pull 62070122/final_sdtp_back-end`
    `docker pull 62070122/database`

3. สั่งคำสั่ง 3 คำสั่ง ตามลำดับ
    หากทำวิธีแรก
    `docker run -d -p 20000:27017 mongo`
    `docker run -d -p 9000:9000 final_sdtp_front-end`
    `docker run -d -p 3000:3000 final_sdtp_back-end`

    หากทำวิธีที่ 2

    `docker run -d -p 20000:27017 62070122/database`
    `docker run -d -p 9000:9000 62070122/final_sdtp_front-end`
    `docker run -d -p 3000:3000 62070122/final_sdtp_back-end`

4. ทดลองเข้าใช้งานที่
    frontend: http://localhost:9000/
    backend: http://localhost:3000/