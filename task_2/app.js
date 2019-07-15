'use strict';

const clientTable = document.getElementById('clientTable');
const clientName = document.getElementsByClassName('table__client--name');
const clientPhone = document.getElementsByClassName('table__client--phone');
const clientEmail = document.getElementsByClassName('table__client--email');
const clientNotice = document.getElementsByClassName('table__client--notice');

const contactTemplate = document.getElementById('contactTemplate');
const contactTemplateRow = document.getElementById('contactTemplateRow');
const rebuiltClientName = document.getElementsByClassName('table--rebuilt__contacts--name');
const rebuiltClientPhone = document.getElementsByClassName('table--rebuilt__contacts--phone');
const rebuiltClientEmail = document.getElementsByClassName('table--rebuilt__contacts--email');
const rebuiltCancel = document.getElementsByClassName('table--rebuilt__contacts--cancel');


init();

function init() {
    addContactRow();
    addEventListeners();
}


function addContactRow() {
    for (let i = 0; i < clientName.length; i++) {
        contactTemplate.innerHTML += contactTemplateRow[i];
        contactTemplate.appendChild(contactTemplateRow);

        rebuiltClientName[i].innerHTML = clientName[i].innerHTML;
        rebuiltClientPhone[i].innerHTML = clientPhone[i].innerHTML;
        rebuiltClientEmail[i].innerHTML = clientEmail[i].innerHTML;
    }
}


function addEventListeners() {
    onClientNoticeClick();
    onCancelViewBtnClick();
}


function onClientNoticeClick() {
    clientTable.addEventListener('click', changeTableView);
}

function changeTableView() {
    if (event.target.classList.contains('table__client--notice')) {
        contactTemplate.classList.toggle('hideTable');
        clientTable.classList.toggle('hideTable');
    }
}


function onCancelViewBtnClick() {
    contactTemplate.addEventListener('click', cancelChangeTableView);
}

function cancelChangeTableView() {
    if (event.target.classList.contains('table--rebuilt__contacts--cancel')) {
        clientTable.classList.toggle('hideTable');
        contactTemplate.classList.toggle('hideTable');
    }
}










// const clientNotice = document.getElementsByClassName('table__client--notice');
// const clientName = document.getElementsByClassName('table__client--name');

// const contactTemplate = document.getElementById('contactTemplate').innerHTML;


// function onClientNoticeClick() {
//     console.log(clientName[0]);
// }

// contactTemplateName.innerHTML = clientName[2].textContent;

// // contactTemplate.appendChild(contactTemplate);

// // console.log(contactTemplateRow);

// const contactTr = document.createElement('tr');
// contactTr.innerHTML = contactTemplate;
// contactsList.appendChild(contactTr);

// for (let i = 0; i < 5; i++) {
//     let ros = contactsList.insertRow(i);
//     ros.innerHTML = contactTemplateRow[i];
//     ros.innerHTML = contactTemplateRow[i];
//     console.log(ros);
// }