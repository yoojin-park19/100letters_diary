

//  글자 제한 왜 btn이 null이지??
const btn = document.getElementById('myBtn');

function count(){
    let textArea = document.getElementById('textArea').value
        if(textArea.length > 100) {
            textArea = textArea.substring(0,100); 
            document.getElementById('textArea').value = textArea;
        }
    document.getElementById('letters').innerHTML = 99-textArea.length + '자 남았어요!';
    document.getElementById('today_date').innerText = todayDate;
    }


//  내용 저장하기

const didForm = document.querySelector(".didform");
const didText = document.querySelector('#textArea');
const dids = document.querySelector('#cont_read')
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth()+1;
let date= today.getDate();
const todayDate = year + '년' + month +'월' + date +'일';


const DIDLIST = "didList";

let didList = [];
function saveDidList() {
    localStorage.setItem(DIDLIST,JSON.stringify(didList));
}
function saveDid(did) {
    const didObj = {
        date: todayDate,
        text: did,
        id: didList.length+1,
    };
    didList.push(didObj);
    saveDidList();
}
function delDid(event) {
    const {target: button} = event;
    const li = button.parentNode;
    dids.removeChild(li);
    didList = didList.filter((did) => did.id !== Number(li,id));
    saveDidList()
}
function paintDid(did, todayDate) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delButton = document.createElement("button");
    delButton.innerText = "지우기"
    delButton.addEventListener('click', delDid);
    span.innerHTML = todayDate + '<br>' +did;
    li.appendChild(span);
    li.appendChild(delButton);
    li.id = didList.length +1;
    dids.appendChild(li);
}
function createDid (event) {
    event.preventDefault();
    const did = didText.value;
    paintDid(did, todayDate);
    saveDid(did, todayDate);
    did.value = "";
}
function loadDidList() {
    const loadedDidList = localStorage.getItem(DIDLIST);
    if(loadedDidList !== null) {
        const parsedidList = JSON.parse(loadedDidList);
        for (let did of  parsedidList) {
            const { text } = did;
            const { date} =todayDate;
            paintDid (text, todayDate);
            saveDid(text, todayDate);
        }
    }
}
function init() {
    loadDidList();
    btn.addEventListener('click', createDid)
}init()