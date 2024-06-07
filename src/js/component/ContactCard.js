import React, { useState } from "react";

export const ContactCard = ({ contact, updateContact, deleteContact }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedContact, setUpdatedContact] = useState(contact);

    const avatar = 'https://media.istockphoto.com/id/1327495437/es/foto/mujer-emocionada-con-c%C3%A1rdigan-arco-iris.jpg?s=612x612&w=0&k=20&c=7Rz6fXlkcgy8wXhAiCZ03Sgq5T4SxmrT9Ua8WIsieCI=';

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedContact({ ...updatedContact, [name]: value });
    };

    const handleUpdate = () => {
        updateContact(contact.id, updatedContact);
        setIsEditing(false);
    };

    return (
        <div className="container-md card contact p-3">
            <div className="row w-100">
                <div className="col-3 d-flex align-items-center justify-content-center">
                    <img src={avatar} className="avatar" />
                </div>
                <div className="col-9 d-flex align-items-start flex-column">
                    <div className="row w-100">
                        <div className="col-12 d-flex align-items-start flex-column">
                            {isEditing ? (
                                <>
                                    <input type="text" name="name" value={updatedContact.name} onChange={handleChange} />
                                    <input type="text" name="address" value={updatedContact.address} onChange={handleChange} />
                                    <input type="text" name="phone" value={updatedContact.phone} onChange={handleChange} />
                                    <input type="text" name="email" value={updatedContact.email} onChange={handleChange} />
                                    <button onClick={handleUpdate}>Save</button>
                                </>
                            ) : (
                                <>
                                <div className="row w-100">
                                    <div className="col-10">
                                        <p className="h6 name">{contact.name}</p>
                                    </div>
                                    <div className="col-2 d-flex align-items-center justify-content-end">
                                <i className="fa-solid fa-pencil" id="btn-edit" onClick={() => setIsEditing(true)}></i>
                                <i className="fa-solid fa-trash-can" id="btn-delete" onClick={() => deleteContact(contact.id)}></i>
                            </div>
                                </div>
                                
                                    
                                    <p className="text-secondary address">
                                        <i className="fa-solid fa-location-dot me-3"></i>
                                        {contact.address}
                                    </p>
                                    <p className="text-secondary phone">
                                        <i className="fa-solid fa-phone-flip me-3"></i>
                                        {contact.phone}
                                    </p>
                                    <p className="text-secondary email">
                                        <i className="fa-solid fa-envelope me-3"></i>
                                        {contact.email}
                                    </p>
                                </>
                            )}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};
