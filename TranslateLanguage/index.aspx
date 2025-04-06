<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="Index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title data-translate="systemName"></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content="Code First 4 dotNet Framework" />
    <meta name="theme-color" content="#253988" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="format-detection" content="telephone=no" />
    <link href="assets/images/mu-favicon.png" rel="shortcut icon" type="image/x-icon" />
    <script type="text/javascript" src="dictionary.js"></script>
    <script type="text/javascript" src="translate.js"></script>
</head>
<body>
    <button
        id="flag"
        style="
            width: 30px;
            height: 30px;
            font-size: 12px;
            background: #cccccc;
            border-color: #000000;
            border-radius: 5px;
        ">
    </button>
    <br />
    <span data-translate="appFormID"></span>
    <br />
    <input data-translate-placeholder="reasonAppReject" />
    <br />
    <input data-translate-value="appSubmit" />
    <br />
    <select>
        <option value="0" selected="selected" data-translate="select"></option>
        <option value="1" data-translate="tab1Title"></option>
        <option value="2" data-translate="tab2Title"></option>
        <option value="3" data-translate="tab3Title"></option>
    </select>
    <div id="content"></div>
</body>
<script type="text/javascript">
    let lang = 'th';
    let flag = 'en';
    let eleFlag = document.getElementById('flag');
    let translate = null;

    async function doOnInit() {
        translate = new Translate(dictionary, lang);
        translate.localize();
        eleFlag.innerText = flag.toUpperCase();

        let options = {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
            }
        };

        let response = await fetch('./Handler.ashx', options);
        let result = await response.text();

        document.getElementById('content').innerHTML = result;
        translate.lang(lang);
    }

    function doSetLanguage() {        
        if (lang === 'th') {
            lang = 'en';
            translate.lang(lang);

            return;
        }

        if (lang === 'en') {
            lang = 'th';
            translate.lang(lang);

            return;
        }
    }

    eleFlag.addEventListener('click', function (e) {
        doSetLanguage();        
    }, false);

    window.addEventListener('DOMContentLoaded', function () {
        doOnInit();        
    }, false);
</script>
</html>
