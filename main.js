let projectList = JSON.parse(localStorage.getItem(`projectList`)) || [];
$(`#entryArea`).on(`input`, function() {
    $(`#resultArea`).empty()
    $(`#resultArea`).append(
        $(`#entryArea`).val()
    )    
    
});

$(`.cssPopup`).hide(0);
$(`.savePopup`).hide(0);
$(`.loadPopup`).hide(0);
$(`#cssSettings`).click(function(){
    $(`.cssPopup`).show(200)
});
$(`#loadBtn`).click(function(){
    $(`.loadPopup`).show(200);
    $(`.loadArea`).empty();
    for(let el of projectList){
        $(`.loadArea`).append(`
            <div class="item" id="item${projectList.indexOf(el, 0)}">${el.projectName}</div>`
        )
        }
});


$(`#saveBtn`).click(function(){
    $(`.savePopup`).show(200)
})
$(`#cssClose`).click(function(){
    $(`.cssPopup`).hide(200)
});
$(`#saveClose`).click(function(){
    $(`.savePopup`).hide(200)
});
$(`#loadClose`).click(function(){
    $(`.loadPopup`).hide(200)
});

$(`#save`).click(function(){
    let tempA = [];
    let tempB = [];
    let a = styleCss.childNodes;
    let b = scriptJs.childNodes;
    let c = $(`#entryArea`).val();
    for(el of a){
        tempA.push(el.textContent)
    }
    a = tempA.join(``);;
    for(el of b){
        tempB.push(el.textContent)
    }
    b = tempB.join(``);
    let data = {
        css:a,
        js:b,
        html:`${c}`,
        projectName:`${$(`#projectName`).val()}`
    };
    projectList.push(data);
    localStorage.setItem(`projectList`,JSON.stringify(projectList))
    $(`.savePopup`).hide(200)
});

document.onclick = function (e) {
    id = e.target.id.substring(4);
    if(e.target.id.substring(0,4)==`item`){
        console.log(projectList[id])
        console.log(id)
        let a = projectList[id].html;
        entryArea.value = a;
        $(`#resultArea`).empty()
        $(`#resultArea`).append(
            $(`#entryArea`).val()
        )    
        $(`#styleCss`).empty()
        $(`#scriptJs`).empty()
        $(`#styleCss`).append(projectList[id].css)
        $(`#scriptJs`).append(projectList[id].js)
        $(`.loadPopup`).hide(200)
    }
};

$(`#backgroundColor`).on(`input`, function() {
    $(`#styleCss`).append(
        `.resultArea{
            background-color:${$(`#backgroundColor`).val()};
        }`
    )
});

$(`#textColor`).on(`input`, function() {
    if(textClass.value == ``){
        $(`#styleCss`).append(
            `.resultArea{
                color:${$(`#textColor`).val()};
            }`
        )
    }else if(textClass.value != ``){
        $(`#styleCss`).append(
            `.resultArea .${$(`#textClass`).val()}{
                color:${$(`#textColor`).val()};
            }`
        )
    }
});

$(`#textShadow`).on(`input`, function() {
    if(textClass.value == ``){
        $(`#styleCss`).append(
            `.resultArea{
                text-shadow:5px 5px 10px ${$(`#textShadow`).val()};
            }`
        )
    }else if(textClass.value != ``){
        $(`#styleCss`).append(
            `.resultArea .${$(`#textClass`).val()}{
                text-shadow:5px 5px 10px ${$(`#textShadow`).val()};
            }`
        )
    }
        
});

$(`#textWeight`).on(`input`, function() {
    if(textClass.value == ``){
        $(`#styleCss`).append(
            `.resultArea{
                font-weight:${$(`#textWeight`).val()};
            }`
        )
    }else if(textClass.value != ``){
        $(`#styleCss`).append(
            `.resultArea .${$(`#textClass`).val()}{
                font-weight:${$(`#textWeight`).val()};
            }`
        )
    }
    
});

$(`#divHeight`).on(`input`, function() {
    if(divClass.value == ``){
        $(`#styleCss`).append(
            `.resultArea div{
            height:${$(`#divHeight`).val()}px;
        }`)
    }else if(divClass.value != ``){
        $(`#styleCss`).append(
            `.resultArea .${$(`#divClass`).val()}{
            height:${$(`#divHeight`).val()}px;
        }`)
    }
});

$(`#divWidth`).on(`input`, function() {
    if(divClass.value == ``){
        $(`#styleCss`).append(
            `.resultArea div{
                width:${$(`#divWidth`).val()}px;
            }`
        )
    }else if(divClass.value != ``){
        $(`#styleCss`).append(
            `.resultArea .${$(`#divClass`).val()}{
                width:${$(`#divWidth`).val()}px;
            }`
        )
    }
});

$(`#divColor`).on(`input`, function() {
    if(divClass.value == ``){
        $(`#styleCss`).append(
            `.resultArea div{
                background-color:${$(`#divColor`).val()};
            }`
        )
    }else if(divClass.value != ``){
        $(`#styleCss`).append(
            `.resultArea .${$(`#divClass`).val()}{
                background-color:${$(`#divColor`).val()};
            }`
        )
    }
});

$(`#contourDivWidth`).on(`input`, function() {
    if(divClass.value == ``){
        $(`#styleCss`).append(
            `.resultArea div{
                border:${$(`#contourDivWidth`).val()}px solid ${$(`#contourDivColor`).val()};
            }`
        )
    }else if(divClass.value != ``){
        $(`#styleCss`).append(
            `.resultArea .${$(`#divClass`).val()}{
                border:${$(`#contourDivWidth`).val()}px solid ${$(`#contourDivColor`).val()};
            }`
        )
    }        
});

$(`#contourDivColor`).on(`input`, function() {
    if(divClass.value == ``){
        $(`#styleCss`).append(
            `.resultArea div{
                border:${$(`#contourDivWidth`).val()}px solid ${$(`#contourDivColor`).val()};
            }`
        )
    }else if(divClass.value != ``){
        $(`#styleCss`).append(
            `.resultArea .${$(`#divClass`).val()}{
                border:${$(`#contourDivWidth`).val()}px solid ${$(`#contourDivColor`).val()};
            }`
        )
    }        
});

$(`#borderRadiusDiv`).on(`input`, function() {
    if(divClass.value == ``){
        $(`#styleCss`).append(
            `.resultArea div{
                border-radius:${$(`#borderRadiusDiv`).val()}px;
            }`
        )
    }else if(divClass.value != ``){
        $(`#styleCss`).append(
            `.resultArea .${$(`#divClass`).val()}{
                border-radius:${$(`#borderRadiusDiv`).val()}px;
            }`
        )
    }        
});

$(`#divColorShadow`).on(`input`, function() {
    if(divClass.value == ``){
        $(`#styleCss`).append(
            `.resultArea div{
                box-shadow:5px 5px 10px ${$(`#divColorShadow`).val()};
            }`
        )
    }else if(divClass.value != ``){
        $(`#styleCss`).append(
            `.resultArea .${$(`#divClass`).val()}{
                box-shadow:5px 5px 10px ${$(`#divColorShadow`).val()};
            }`
        )
    }        
});

$(`#buttonHeight`).on(`input`, function() {
    if(buttonClass.value == ``){
        $(`#styleCss`).append(
            `.resultArea button{
            height:${$(`#buttonHeight`).val()}px;
        }`)
    }else if(buttonClass.value != ``){
        $(`#styleCss`).append(
            `.resultArea .${$(`#buttonClass`).val()}{
            height:${$(`#buttonHeight`).val()}px;
        }`)
    }
});

$(`#buttonWidth`).on(`input`, function() {
    if(buttonClass.value == ``){
        $(`#styleCss`).append(
            `.resultArea button{
                width:${$(`#buttonWidth`).val()}px;
            }`
        )
    }else if(buttonClass.value != ``){
        $(`#styleCss`).append(
            `.resultArea .${$(`#buttonClass`).val()}{
                width:${$(`#buttonWidth`).val()}px;
            }`
        )
    }
});

$(`#buttonColor`).on(`input`, function() {
    if(buttonClass.value == ``){
        $(`#styleCss`).append(
            `.resultArea button{
                background-color:${$(`#buttonColor`).val()};
            }`
        )
    }else if(buttonClass.value != ``){
        $(`#styleCss`).append(
            `.resultArea .${$(`#buttonClass`).val()}{
                background-color:${$(`#buttonColor`).val()};
            }`
        )
    }
});

$(`#contourButtonWidth`).on(`input`, function() {
    if(buttonClass.value == ``){
        $(`#styleCss`).append(
            `.resultArea button{
                border:${$(`#contourButtonWidth`).val()}px solid ${$(`#contourButtonColor`).val()};
            }`
        )
    }else if(buttonClass.value != ``){
        $(`#styleCss`).append(
            `.resultArea .${$(`#buttonClass`).val()}{
                border:${$(`#contourButtonWidth`).val()}px solid ${$(`#contourButtonColor`).val()};
            }`
        )
    }        
});

$(`#contourButtonColor`).on(`input`, function() {
    if(buttonClass.value == ``){
        $(`#styleCss`).append(
            `.resultArea button{
                border:${$(`#contourButtonWidth`).val()}px solid ${$(`#contourButtonColor`).val()};
            }`
        )
    }else if(buttonClass.value != ``){
        $(`#styleCss`).append(
            `.resultArea .${$(`#buttonClass`).val()}{
                border:${$(`#contourButtonWidth`).val()}px solid ${$(`#contourButtonColor`).val()};
            }`
        )
    }        
});

$(`#borderRadiusButton`).on(`input`, function() {
    if(buttonClass.value == ``){
        $(`#styleCss`).append(
            `.resultArea button{
                border-radius:${$(`#borderRadiusButton`).val()}px;
            }`
        )
    }else if(buttonClass.value != ``){
        $(`#styleCss`).append(
            `.resultArea .${$(`#buttonClass`).val()}{
                border-radius:${$(`#borderRadiusButton`).val()}px;
            }`
        )
    }        
});

$(`#buttonColorShadow`).on(`input`, function() {
    if(buttonClass.value == ``){
        $(`#styleCss`).append(
            `.resultArea button{
                box-shadow:5px 5px 10px ${$(`#buttonColorShadow`).val()};
            }`
        )
    }else if(buttonClass.value != ``){
        $(`#styleCss`).append(
            `.resultArea .${$(`#buttonClass`).val()}{
                box-shadow:5px 5px 10px ${$(`#buttonColorShadow`).val()};
            }`
        )
    }        
});

$(`#imageHeight`).on(`input`, function() {
    if(imageClass.value == ``){
        $(`#styleCss`).append(
        `.resultArea img{
            height:${$(`#imageHeight`).val()}px;
        }`)
    }else if(imageClass.value != ``){
        $(`#styleCss`).append(
        `.resultArea .${$(`#imageClass`).val()}{
            height:${$(`#imageHeight`).val()}px;
        }`)
    }
});

$(`#imageWidth`).on(`input`, function() {
    if(imageClass.value == ``){
        $(`#styleCss`).append(
            `.resultArea img{
                width:${$(`#imageWidth`).val()}px;
            }`
        )
    }else if(imageClass.value != ``){
        $(`#styleCss`).append(
            `.resultArea .${$(`#imageClass`).val()}{
                width:${$(`#imageWidth`).val()}px;
            }`
        )
    }
});

$(`#contourImageWidth`).on(`input`, function() {
    if(imageClass.value == ``){
        $(`#styleCss`).append(
            `.resultArea img{
                border:${$(`#contourImageWidth`).val()}px solid ${$(`#contourImageColor`).val()};
            }`
        )
    }else if(imageClass.value != ``){
        $(`#styleCss`).append(
            `.resultArea .${$(`#imageClass`).val()}{
                border:${$(`#contourImageWidth`).val()}px solid ${$(`#contourImageColor`).val()};
            }`
        )
    }        
});

$(`#contourImageColor`).on(`input`, function() {
    if(imageClass.value == ``){
        $(`#styleCss`).append(
            `.resultArea img{
                border:${$(`#contourImageWidth`).val()}px solid ${$(`#contourImageColor`).val()};
            }`
        )
    }else if(imageClass.value != ``){
        $(`#styleCss`).append(
            `.resultArea .${$(`#imageClass`).val()}{
                border:${$(`#contourImageWidth`).val()}px solid ${$(`#contourImageColor`).val()};
            }`
        )
    }        
});

$(`#borderRadiusImage`).on(`input`, function() {
    if(imageClass.value == ``){
        $(`#styleCss`).append(
            `.resultArea img{
                border-radius:${$(`#borderRadiusImage`).val()}px;
            }`
        )
    }else if(imageClass.value != ``){
        $(`#styleCss`).append(
            `.resultArea .${$(`#imageClass`).val()}{
                border-radius:${$(`#borderRadiusImage`).val()}px;
            }`
        )
    }        
});

$(`#imageColorShadow`).on(`input`, function() {
    if(imageClass.value == ``){
        $(`#styleCss`).append(
            `.resultArea img{
                box-shadow:5px 5px 10px ${$(`#imageColorShadow`).val()};
            }`
        )
    }else if(imageClass.value != ``){
        $(`#styleCss`).append(
            `.resultArea .${$(`#imageClass`).val()}{
                box-shadow:5px 5px 10px ${$(`#imageColorShadow`).val()};
            }`
        )
    }        
});