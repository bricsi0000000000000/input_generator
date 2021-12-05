var id = "";
var type = "";
var title = "";
var placeholder = "";
var needTitle = false;
var isRequired = false;
var titleFontSize = 16;
var placeholderFontSize = 16;
var titleAlignment = '';
var placeholderAlignment = '';
var cornerRadius = '';
var borderColor = '';
var textColor = '';
var backgroundColor = '';
var titleColor = '';
var placeholderColor = '';
var selectionBackgroundColor = '';
var selectionColor = '';

var generatedInputHtml;
var generatedInputCss;

var inputContainerCssClass = 'input-container';
var inputTitleCssClass = 'input-title';

function main() {
  id = document.getElementById("input-id").value;
  type = document.getElementById("select-type").value;
  title = document.getElementById("input-title").value;
  placeholder = document.getElementById("input-placeholder").value;
  needTitle = document.getElementById("need-title-switch").checked;
  isRequired = document.getElementById("is-required-switch").checked;
  titleFontSize = document.getElementById("title-font-size").value;
  placeholderFontSize = document.getElementById("placeholder-font-size").value;
  titleAlignment = 'left';
  placeholderAlignment = 'left';
  cornerRadius = document.getElementById("corner-radius").value;

  borderColor = document.getElementById("input-border-color").value;
  document.getElementById("input-border-color-unit").innerHTML = borderColor.toLocaleUpperCase();

  textColor = document.getElementById("input-text-color").value;
  document.getElementById("input-text-color-unit").innerHTML = textColor.toLocaleUpperCase();

  backgroundColor = document.getElementById("input-background-color").value;
  document.getElementById("input-background-color-unit").innerHTML = backgroundColor.toLocaleUpperCase();

  titleColor = document.getElementById("input-title-color").value;
  document.getElementById("input-title-color-unit").innerHTML = titleColor.toLocaleUpperCase();

  placeholderColor = document.getElementById("input-placeholder-color").value;
  document.getElementById("input-placeholder-color-unit").innerHTML = placeholderColor.toLocaleUpperCase();

  selectionBackgroundColor = document.getElementById("input-selection-background-color").value;
  document.getElementById("input-selection-background-color-unit").innerHTML = selectionBackgroundColor.toLocaleUpperCase();

  selectionColor = document.getElementById("input-selection-color").value;
  document.getElementById("input-selection-color-unit").innerHTML = selectionColor.toLocaleUpperCase();

  generateInput();
}

main();

function selectType_OnChange() {
  type = document.getElementById("select-type").value;
  generateInput();
}

function needTitle_OnChange() {
  needTitle = !needTitle;
  generateInput();
}

function title_OnChange() {
  title = document.getElementById("input-title").value;
  generateInput();
}

function isRequired_OnChange() {
  isRequired = !isRequired;
  generateInput();
}

function titleFontSize_OnChange() {
  titleFontSize = document.getElementById("title-font-size").value;
  generateInput();
}

function placeholderFontSize_OnChange() {
  placeholderFontSize = document.getElementById("placeholder-font-size").value;
  generateInput();
}

function id_OnChange() {
  id = document.getElementById("input-id").value;
  generateInput();
}

function placeholder_OnChange() {
  placeholder = document.getElementById("input-placeholder").value;
  generateInput();
}

function titleAlignmentLeft_OnClick(){
  titleAlignment = 'left';
  document.getElementById("title-alignment-left").style.color = "#EB3636";
  document.getElementById("title-alignment-center").style.color = "#0D0D0D";
  document.getElementById("title-alignment-right").style.color = "#0D0D0D";
  generateInput();
}

function titleAlignmentCenter_OnClick(){
  titleAlignment = 'center';
  document.getElementById("title-alignment-left").style.color = "#0D0D0D";
  document.getElementById("title-alignment-center").style.color = "#EB3636";
  document.getElementById("title-alignment-right").style.color = "#0D0D0D";
  generateInput();
}

function titleAlignmentRight_OnClick(){
  titleAlignment = 'right';
  document.getElementById("title-alignment-left").style.color = "#0D0D0D";
  document.getElementById("title-alignment-center").style.color = "#0D0D0D";
  document.getElementById("title-alignment-right").style.color = "#EB3636";
  generateInput();
}

function placeholderAlignmentLeft_OnClick(){
  placeholderAlignment = 'left';
  document.getElementById("placeholder-alignment-left").style.color = "#EB3636";
  document.getElementById("placeholder-alignment-center").style.color = "#0D0D0D";
  document.getElementById("placeholder-alignment-right").style.color = "#0D0D0D";
  generateInput();
}

function placeholderAlignmentCenter_OnClick(){
  placeholderAlignment = 'center';
  document.getElementById("placeholder-alignment-left").style.color = "#0D0D0D";
  document.getElementById("placeholder-alignment-center").style.color = "#EB3636";
  document.getElementById("placeholder-alignment-right").style.color = "#0D0D0D";
  generateInput();
}

function placeholderAlignmentRight_OnClick(){
  placeholderAlignment = 'right';
  document.getElementById("placeholder-alignment-left").style.color = "#0D0D0D";
  document.getElementById("placeholder-alignment-center").style.color = "#0D0D0D";
  document.getElementById("placeholder-alignment-right").style.color = "#EB3636";
  generateInput();
}

function cornerRadius_OnChange(){
  cornerRadius = document.getElementById("corner-radius").value;
  generateInput();
}

function borderColor_OnChange(){
  borderColor = document.getElementById("input-border-color").value;
  document.getElementById("input-border-color-unit").innerHTML = borderColor.toLocaleUpperCase();
  generateInput();
}

function textColor_OnChange(){
  textColor = document.getElementById("input-text-color").value;
  document.getElementById("input-text-color-unit").innerHTML = textColor.toLocaleUpperCase();
  generateInput();
}

function backgroundColor_OnChange(){
  backgroundColor = document.getElementById("input-background-color").value;
  document.getElementById("input-background-color-unit").innerHTML = backgroundColor.toLocaleUpperCase();
  generateInput();
}

function titleColor_OnChange(){
  titleColor = document.getElementById("input-title-color").value;
  document.getElementById("input-title-color-unit").innerHTML = titleColor.toLocaleUpperCase();
  generateInput();
}

function placeholderColor_OnChange(){
  placeholderColor = document.getElementById("input-placeholder-color").value;
  document.getElementById("input-placeholder-color-unit").innerHTML = placeholderColor.toLocaleUpperCase();
  generateInput();
}

function selectionBackgroundColor_OnChange(){
  selectionBackgroundColor = document.getElementById("input-selection-background-color").value;
  document.getElementById("input-selection-background-color-unit").innerHTML = selectionBackgroundColor.toLocaleUpperCase();
  generateInput();
}

function selectionColor_OnChange(){
  selectionColor = document.getElementById("input-selection-color").value;
  document.getElementById("input-selection-color-unit").innerHTML = selectionColor.toLocaleUpperCase();
  generateInput();
}

function generateInput() {
  generateHtmlOutput();
  generateCssOutput();


  let generatedInputTitle = document.getElementById("generated-input-title");
  generatedInputTitle.innerHTML = title;

  let generatedInputTitleClassName = 'generated-input-title-class';
  var generatedInputTitleClassStyleElement = document.createElement('style');
  let generatedInputTitleClassStyle = '.' + generatedInputTitleClassName;
  generatedInputTitleClassStyle += '{';
  generatedInputTitleClassStyle += 'font-size: ' + titleFontSize + 'px;';
  generatedInputTitleClassStyle += 'text-align: ' + titleAlignment + ';';
  generatedInputTitleClassStyle += 'color: ' + titleColor + ';';
  if(!needTitle){
    generatedInputTitleClassStyle += 'display: none';
    document.getElementById("input-container-title-font-size").style.visibility = "hidden";
  }
  else{
    generatedInputTitleClassStyle += 'display: inherit';
    document.getElementById("input-container-title-font-size").style.visibility = "visible";
  }
  generatedInputTitleClassStyle += '}';
  generatedInputTitleClassStyleElement.innerHTML = generatedInputTitleClassStyle;
  document.getElementsByTagName('head')[0].appendChild(generatedInputTitleClassStyleElement);

  generatedInputTitle.className = generatedInputTitleClassName;


  let generatedInput = document.getElementById("generated-input-container").children[1];
  generatedInput.placeholder = placeholder;
  generatedInput.type = type;

  let generatedInputClassName = 'generated-input-container';

  var generatedInputPlaceholderClassStyleElement = document.createElement('style');
  let generatedInputPlaceholderClassStyle = '#' + generatedInputClassName + ' input::placeholder';
  generatedInputPlaceholderClassStyle += '{';
  generatedInputPlaceholderClassStyle += 'font-size: ' + placeholderFontSize + 'px;';
  generatedInputPlaceholderClassStyle += 'text-align: ' + placeholderAlignment + ';';
  generatedInputPlaceholderClassStyle += 'color: ' + placeholderColor + ';';
  generatedInputPlaceholderClassStyle += '}';
  generatedInputPlaceholderClassStyleElement.innerHTML = generatedInputPlaceholderClassStyle;
  document.getElementsByTagName('head')[0].appendChild(generatedInputPlaceholderClassStyleElement);

  var generatedInputSelectionClassStyleElement = document.createElement('style');
  let generatedInputSelectionClassStyle = '#' + generatedInputClassName + ' input::selection';
  generatedInputSelectionClassStyle += '{';
  generatedInputSelectionClassStyle += 'background-color: ' + selectionBackgroundColor + ';';
  generatedInputSelectionClassStyle += 'color: ' + selectionColor + ';';
  generatedInputSelectionClassStyle += '}';
  generatedInputSelectionClassStyleElement.innerHTML = generatedInputSelectionClassStyle;
  document.getElementsByTagName('head')[0].appendChild(generatedInputSelectionClassStyleElement);

  var generatedInputClassStyleElement = document.createElement('style');
  let generatedInputClassStyle = '#' + generatedInputClassName + ' input';
  generatedInputClassStyle += '{';
  generatedInputClassStyle += 'width: 100%;';
  generatedInputClassStyle += 'font-size: ' + placeholderFontSize + 'px;';
  generatedInputClassStyle += 'border-radius: ' + cornerRadius + 'px;';
  generatedInputClassStyle += 'border: 1px solid ' + borderColor + ';';
  generatedInputClassStyle += 'background-color: ' + backgroundColor + ';';
  generatedInputClassStyle += 'color: ' + textColor + ';';
  generatedInputClassStyle += '}';
  generatedInputClassStyleElement.innerHTML = generatedInputClassStyle;
  document.getElementsByTagName('head')[0].appendChild(generatedInputClassStyleElement);
}

function generateHtmlOutput() {
  generatedInputHtml = '<div class="' + inputContainerCssClass + '">\n';
  if(needTitle){
    generatedInputHtml += '\t<div class="' + inputTitleCssClass + '">';
    generatedInputHtml += title;
    generatedInputHtml += '</div>\n';
  }
  generatedInputHtml += '\t<input ';
  generatedInputHtml += 'id="' + id + '" ';
  generatedInputHtml += 'type="' + type + '" ';
  generatedInputHtml += 'placeholder="' + placeholder + '" ';
  if (isRequired) {
    generatedInputHtml += 'required ';
  }

  generatedInputHtml += '>\n';
  generatedInputHtml += '</div>';

  document.getElementById("generated-html").innerHTML = generatedInputHtml;
}

function generateCssOutput() {
  generatedInputCss = '.' + inputContainerCssClass + '\n';
  generatedInputCss += '{\n';
  generatedInputCss += '}\n';

  if (needTitle) {
    generatedInputCss += '\n';
    generatedInputCss += '.' + inputTitleCssClass + '\n';
    generatedInputCss += '{\n';
    generatedInputCss += '\tfont-size: ' + titleFontSize + ' px;\n';
    generatedInputCss += '\tcolor: ' + titleColor + ';';
    generatedInputCss += '\n';
    generatedInputCss += '}\n';
  }

  generatedInputCss += '\n';
  generatedInputCss += '.' + inputContainerCssClass + ' input\n';
  generatedInputCss += '{\n';
  generatedInputCss += '\tfont-size: ' + titleFontSize + ' px;\n';
  generatedInputCss += '\ttext-alignment: ' + titleAlignment + ';\n';
  generatedInputCss += '\tborder-radius: ' + cornerRadius + 'px;\n';
  generatedInputCss += '\tborer: 1px solid ' + borderColor + ';\n';
  generatedInputCss += '\tbackground-color: ' + backgroundColor + ';\n';
  generatedInputCss += '\tcolor: ' + textColor + ';';
  generatedInputCss += '\n';
  generatedInputCss += '}\n';


  generatedInputCss += '\n';
  generatedInputCss += '.' + inputContainerCssClass + ' input::placeholder\n';
  generatedInputCss += '{\n';
  generatedInputCss += '\tfont-size: ' + placeholderFontSize + ' px;\n';
  generatedInputCss += '\ttext-alignment: ' + placeholderAlignment + ';\n';
  generatedInputCss += '\tcolor: ' + placeholderColor + ';';
  generatedInputCss += '\n';
  generatedInputCss += '}\n';

  generatedInputCss += '\n';
  generatedInputCss += '.' + inputContainerCssClass + ' input::selection\n';
  generatedInputCss += '{\n';
  generatedInputCss += '\tbackground-color: ' + selectionBackgroundColor + ';\n';
  generatedInputCss += '\tcolor: ' + selectionColor + ';\n';
  generatedInputCss += '}\n';


  document.getElementById("generated-css").innerHTML = generatedInputCss;
}

function copyHtmlCode() {
  navigator.clipboard.writeText(generatedInputHtml);
}

function copyCssCode() {
  navigator.clipboard.writeText(generatedInputCss);
}