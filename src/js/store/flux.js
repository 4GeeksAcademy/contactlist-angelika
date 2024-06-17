const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: []
        },
        actions: {
            createAgenda: async () => {
                try {
                    const resp = await fetch('https://playground.4geeks.com/contact/agendas/Angelika', {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                            "accept": "application/json"
                        },
                        body: JSON.stringify({
                            agenda_slug: slug
                        })
                    });
                    if (resp.ok) {
                        const newAgenda = await resp.json();
                        console.log("Agenda agregada correctamente:", newAgenda);
                    } else {
                        console.error("Error al intentar agregar una agenda");
                    }
                } catch (error) {
                    console.error("Error al intentar agregar una agenda:", error);
                }
            },
            
            getContact: async () => {
                try {
                    const resp = await fetch('https://playground.4geeks.com/contact/agendas/Angelika', {
                        method: 'GET',
                        headers: {
                            "Content-Type": "application/json",
                            "accept": "application/json"
                        }
                    });
                    if (!resp.ok) {
                        throw new Error(`HTTP error! status: ${resp.status}`);
                    }
                    const data = await resp.json();
                    if (data && Array.isArray(data)) {
                        setStore({ contacts: data });
                        console.log("Contacts updated in store:", getStore().contacts);
                    } else {
                        console.error("La respuesta de la API no contiene un array de contactos:", data);
                    }
                } catch (err) {
                    console.error(err);
                }
            },
            
            addContact: async (contact) => {
                try {
                    const resp = await fetch('https://playground.4geeks.com/contact/agendas/Angelika/contacts', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            "accept": "application/json"
                        },
                        body: JSON.stringify(contact)
                    });
                    if (resp.ok) {
                        const newContact = await resp.json();
                        setStore({ contacts: [...getStore().contacts, newContact] });
                        console.log("Contacto agregado correctamente:");
                    } else {
                        console.error("Error al intentar agregar un contacto");
                    }
                } catch (error) {
                    console.error("Error al intentar agregar un contacto:", error);
                }
            },

            updateContact: async (contactId, updatedContact) => {
                try {
                    const resp = await fetch(`https://playground.4geeks.com/contact/agendas/Angelika/contacts/${contactId}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            "accept": "application/json"
                        },
                        body: JSON.stringify(updatedContact)
                    });
                    if (resp.ok) {
                        const data = await resp.json();
                        const updatedContacts = getStore().contacts.map(contact => {
                            if (contact.id === contactId) {
                                return data;
                            }
                            return contact;
                        });
                        setStore({ contacts: updatedContacts });
                    } else {
                        console.error("Error al intentar actualizar un contacto");
                    }
                } catch (error) {
                    console.error(`Error al actualizar el contacto con ID ${contactId}:`, error);
                }
            },

            deleteContact: async (contactId) => {
                try {
                    const resp = await fetch(`https://playground.4geeks.com/contact/agendas/Angelika/contacts/${contactId}`, {
                        method: 'DELETE',
                        headers: {
                            "Content-Type": "application/json",
                            "accept": "application/json"
                        }
                    });
                    if (resp.ok) {
                        const updatedContacts = getStore().contacts.filter(contact => contact.id !== contactId);
                        setStore({ contacts: updatedContacts });
                    } else {
                        console.error("Error al intentar eliminar un contacto");
                    }
                } catch (error) {
                    console.error(`Error al eliminar el contacto con ID ${contactId}:`, error);
                }
            }
        }
    };
};

export default getState;
