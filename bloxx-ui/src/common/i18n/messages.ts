export const messages = {
    common: {
        noSelection: 'Es ist nichts selektiert',
        noContent: "Kein Inhalt",
        noUser: "Unbekannter User",
        btnSave: 'Speichern',
        btnCancel: "Abbruch",
    },
    crudActions: {
        edit: 'Ändern..',
        save: 'Speichern',
        delete: 'Löschen...',
        create: 'Neu...'
    },
    postEditor: {
        title: 'Gib hier die neuen Daten ein',
        description: (title: string) => `Daten des Posts "${title}" ändern`,
        fields: {
            title: "Titel",
            content: "Inhalt"
        }
    }
}