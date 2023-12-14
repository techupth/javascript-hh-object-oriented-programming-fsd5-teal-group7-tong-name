class EmailNotification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send(email) {
    console.log(`Notification has been sent to ${email}`);
  }
}

class SMSNotification {
  constructor(notificationId, createdTime, content, phoneNumber) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.phoneNumber = phoneNumber;
  }
  send() {
    console.log(`Notification has been sent to ${this.phoneNumber}`);
  }
}
let e2mailNotification=new EmailNotification("1234","12.00","Tong","kiattisak")
let s2MSNotification=new SMSNotification("321","12.30","สวัสดี","0987654321")
e2mailNotification.send("email@gmail.com")
s2MSNotification.send()