const appState = {
    title: {
        text: 'this is title',
        color: 'red',
    },
    content: {
        text: 'this is content',
        color: 'blue'
    }
};

function renderApp (appState) {
    renderTitle(appState.title);
    renderContent(appState.content);
}

function renderTitle (title) {
    const titleDOM = document.getElementById('title');
    titleDOM.innerHTML = title.text;
    titleDOM.style.color = title.color;
}

function renderContent (content) {
    const contentDOM = document.getElementById('content');
    contentDOM.innerHTML = content.text;
    contentDOM.style.color = content.color;
}


function dispatch (action) {
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            appState.title.text = action.text;
            break
        case 'UPDATE_TITLE_COLOR':
            appState.title.color = action.color;
            break
        default:
            break
    }
}
dispatch({ type: 'UPDATE_TITLE_TEXT', text: 'this is dispatch' });// 修改标题文本
dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' });// 修改标题颜色
renderApp(appState);