const inputUsrMsg = document.getElementById("inputUsrMsg");
const lastMsg = document.getElementById("user-output");
const formMsg = document.getElementById("form-message");
const sendMsgBtn = document.getElementById('sendMsgBtn');
const outputSection = document.getElementById('output');

sendMsgBtn.addEventListener("click", function (event) {
    event.preventDefault();

    if (inputUsrMsg.value.length != 0) {
        let div = document.createElement('div');
        div.classList.add('user-output');
        let text = document.createTextNode(inputUsrMsg.value);
        div.appendChild(text);
        output.appendChild(div);
       
        formMsg.reset();
    } else {
        let div = document.createElement('div');
        div.classList.add('error');
        div.setAttribute("id", "error");
        let text = document.createTextNode("Dude, empty messages are useless😁. Come on, drop some words🖖🖖🖖");
        div.appendChild(text);
        output.prepend(div);

        setTimeout(function () {
            document.getElementById('error').remove();
        }, 5000);
    }
});
