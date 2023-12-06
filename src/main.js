document.addEventListener('DOMContentLoaded',function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]')

   
    for(let i = 0; i < buttons.length; i++){
            buttons[i].addEventListener('click',function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondTodasabas();
            aba.classList.add('shows__list--is-active');
            removerButtonativo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    for (let i = 0; i < questions.length;i++){
        questions[i].addEventListener('click', abreOufecha);
    }
})


function abreOufecha(elemento){
    const classe = 'faq__quetions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}



function removerButtonativo(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondTodasabas(){
    const tabContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < tabContainer.length; i++){
        tabContainer[i].classList.remove('shows__list--is-active');
    }
}

