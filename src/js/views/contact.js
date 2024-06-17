import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard";
import { Navbar } from "../component/Navbar";

export const Contact = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getContact();
    }, []);

    return (
        <>
            <Navbar />
            <div className="d-flex justify-content-center flex-column align-items-center">
                {Array.isArray(store.contacts) && store.contacts.length > 0 ? (
                    store.contacts.map(contact => (
                        <ContactCard
                            key={contact.id}
                            contact={contact}
                            updateContact={actions.updateContact}
                            deleteContact={actions.deleteContact}
                        />
                    ))
                ) : (
                    <p>La lista de contactos está vacia</p>
                )}
            </div>
        </>
        
    );
};
