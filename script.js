document.addEventListener('DOMContentLoaded', () => {
    // Ciblage des éléments
    let form = document.querySelector('#form');
    let name_input = document.querySelector('#name');
    let email_input = document.querySelector('#email');
    let message_input = document.querySelector('#message');
    let note_input = document.querySelector('#note');

    let name_error = document.querySelector('.error_name');
    let email_error = document.querySelector('.error_mail');
    let message_error = document.querySelector('.error_message');
    let note_error = document.querySelector('.error_note');
    let message_success = document.querySelector('#message_success');

    // Fonction d'affichage du message d'erreur

    function voir_erreur (input, error_dom, message) {
        input.classList.add('invalid');
        input.classList.remove('valid');
        error_dom.textContent = message;
        error_dom.style.display = 'block';
    };

     // Fonction pour cacher message d'erreur
    function voir_success (input, error_dom) {
        input.classList.add('valid');
        input.classList.remove('invalid');
        error_dom.style.display = 'none';
    };

    // Vérification de la validité de "name"
    function validate_name () {
        if (name_input.validity.valueMissing) {
            voir_erreur(name_input, name_error, 'Le nom est requis.');
        } else if (name_input.value.length < 3) {
            voir_erreur(name_input, name_error, 'Le nom doit comporter au moins 3 caractères.');
        } else {
            voir_success(name_input, name_error);
        }
    };
    // Vérification de la validité de "email"
    function validate_email (){
        if (email_input.validity.valueMissing) {
            voir_erreur(email_input, email_error, 'L\'email est nécessaire.');
        } else if (email_input.validity.typeMismatch) {
            voir_erreur(email_input, email_error, 'L\'email n\'est pas valide.');
        } else {
            voir_success(email_input, email_error);
        }
    };

    // Vérification de la validité de "message"

    function validate_message ()  {
        if (message_input.validity.valueMissing) {
            voir_erreur(message_input, message_error, 'Le message est requis.');
        } else if (message_input.value.length < 10) {
            voir_erreur(message_input, message_error, 'Le message doit comporter au moins 10 caractères.');
        } else {
            voir_success(message_input, message_error);
        }
    };

    // Vérification de la validité de "note"

    function validate_note () {
        if (note_input.validity.valueMissing) {
            voir_erreur(note_input, note_error, 'La note est nécessaire.');
        } else {
            voir_success(note_input, note_error);
        }
    };

    // Lancement des fonctions
    name_input.addEventListener('input', validate_name);
    email_input.addEventListener('input', validate_email);
    message_input.addEventListener('input', validate_message);
    note_input.addEventListener('input', validate_note);

    // submit du formulaire
    form.addEventListener('submit', (event) => {
        validate_name();
        validate_email();
        validate_message();
        validate_note();

        if (!form.checkValidity()) {
            event.preventDefault();
        } else {
            event.preventDefault();
            message_success.textContent = 'Votre feedback a été envoyé avec succès !';
            message_success.style.display = 'block';
            form.reset();
        }
    });
});
