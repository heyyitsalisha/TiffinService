export default class ContactModel{
    constructor(name, email, phone, message){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.message = message
    }

    static get(){
        return contacts;
    }

    static add(contactObj){
        let newContact = new ContactModel(
            contactObj.name,
            contactObj.email,
            contactObj.phone,
            contactObj.message
        );
        contacts.push(newContact)
    }

}

var contacts = [
    new ContactModel("Admin", "admin@gmail.com", "987654321", "Demo Information"),
];
