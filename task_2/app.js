'use strict';

const clientTable = document.getElementById('clientTable');
const clientName = document.getElementsByClassName('table__client--name');
const clientPhone = document.getElementsByClassName('table__client--phone');
const clientEmail = document.getElementsByClassName('table__client--email');
const clientInfo = document.getElementsByClassName('table__client--info');

const contactTemplate = document.getElementById('contactTemplate');
const contactTemplateRow = document.getElementById('contactTemplateRow');
const rebuiltTable = document.getElementById('rebuiltTable');
const rebuiltClientName = document.getElementsByClassName('table--rebuilt__contacts--name');
const rebuiltClientPhone = document.getElementsByClassName('table--rebuilt__contacts--phone');
const rebuiltClientEmail = document.getElementsByClassName('table--rebuilt__contacts--email');
const rebuiltCancel = document.getElementsByClassName('table--rebuilt__contacts--cancel');
const rebuiltClientInfo = document.getElementsByClassName('table--rebuilt__contacts--info');

const contactInfo = document.getElementById('contactInfo');
const closeInfoBtn = document.getElementById('closeInfo');

console.log(rebuiltClientInfo);


init();

function init() {
    addContactRow();
    addEventListeners();
}


function addContactRow() {
    for (let i = 0; i < clientName.length; i++) {
        contactTemplate.appendChild(contactTemplateRow);
        contactTemplate.innerHTML += contactTemplateRow[i];

        rebuiltClientName[i].innerHTML = clientName[i].innerHTML;
        rebuiltClientPhone[i].innerHTML = clientPhone[i].innerHTML;
        rebuiltClientEmail[i].innerHTML = clientEmail[i].innerHTML;

        rebuiltClientInfo[i].innerHTML = clientInfo[i].innerHTML;
    }
}

function addEventListeners() {
    onClientNoticeClick();
    onCancelViewBtnClick();
    onClientNameClick();
    onCloseInfoClick();
}


function onClientNoticeClick() {
    clientTable.addEventListener('click', changeTableView);
}

function changeTableView() {
    if (event.target.classList.contains('table__client--notice')) {
        clientTable.classList.toggle('hideTable');
        rebuiltTable.classList.toggle('hideTable');
    }
}


function onCancelViewBtnClick() {
    contactTemplate.addEventListener('click', cancelChangeTableView);
}

function cancelChangeTableView() {
    if (event.target.classList.contains('table--rebuilt__contacts--cancel')) {
        rebuiltTable.classList.toggle('hideTable');
        clientTable.classList.toggle('hideTable');
    }
}


function onClientNameClick() {
    rebuiltTable.addEventListener('click', showMoreInfo);
}

function showMoreInfo() {
    if (event.target.classList.contains('table--rebuilt__contacts--name')) {
        contactInfo.classList.remove('hideTable');
        for (let i = 0; i < clientName.length; i++) {
            rebuiltCancel[i].classList.add('hideTable');
            rebuiltClientInfo[i].classList.add('hideTable')
        }
        event.target.parentNode.children[4].classList.toggle('hideTable');
    }
}


function onCloseInfoClick() {
    closeInfoBtn.addEventListener('click', closeInfo);
}

function closeInfo() {
    contactInfo.classList.add('hideTable');
    rebuiltTable.classList.toggle('hideTable')
    clientTable.classList.toggle('hideTable');
    for (let i = 0; i < clientName.length; i++) {
        rebuiltCancel[i].classList.remove('hideTable');
        rebuiltClientInfo[i].classList.add('hideTable')
    }
}