class Notification {
  onstructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send() {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}
class EmailNotification extends Notification {
  constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content);
    this.receiver = receiver;
  }
}

class SMSNotification extends Notification{
  constructor(notificationId, createdTime, content, phoneNumber) {
    super(notificationId, createdTime, content);
    this.phoneNumber = phoneNumber;
  }
  send() {
    console.log(`Notification has been sent to ${this.phoneNumber}`);
  }
}
let E1mailNotification=new EmailNotification("1234","12.00","Tong","kiattisak")
let S1MSNotification=new SMSNotification("321","12.30","สวัสดี","0987654321")
E1mailNotification.send()
S1MSNotification.send()