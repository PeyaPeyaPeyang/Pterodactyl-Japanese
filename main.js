// ==UserScript==
// @name         Pterodactyl Japanize
// @namespace    https://peya.tokyo/
// @version      0.1
// @description  Localize to Pterodactyl!
// @author       Peyang TeamKun
// @match        https://<ADDR HERE>/*
// @grant        none
// ==/UserScript==

var json = [
    {
        "name": "Alert > Body",
        "path": "^\/.*",
        "selector": "div[role=alert] > span:nth-child(2)",
        "rules": [
            {
                "properties": [],
                "replace": "We have e-mailed your password reset link!",
                "translate": "パスワードリセットリンクをメールで送信しました！"
            },
            {
                "properties": [],
                "replace": "The password provided was invalid for this account.",
                "translate": "入力されたパスワードが一致しません。"
            },
            {
                "properties": [],
                "replace": "The password provided was not valid.",
                "translate": "入力されたパスワードが一致しません。"
            },
            {
                "properties": [],
                "replace": "Your primary email has been updated.",
                "translate": "メールアドレスが更新されました。"
            },
        ]
    },
    {
        "name": "Alert > Label",
        "path": "^\/.*",
        "selector": "div[role=alert] > span:nth-child(1)",
        "rules": [
            {
                "properties": [],
                "replace": "Success",
                "translate": "成功"
            },
            {
                "properties": [],
                "replace": "Error",
                "translate": "エラー"
            },
        ]
    },
    {
        "name": "Login",
        "path": "^\/auth/login$",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > div > h2"
                ],
                "replace": "Login to Continue",
                "translate": "ログインして続ける"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > div > form > div > div > label"
                ],
                "replace": "Username or Email",
                "translate": "ユーザ名またはメールアドレス"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > div > form > div > div > div > label"
                ],
                "replace": "Password",
                "translate": "パスワード"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > div > form > div > div > div > button > span"
                ],
                "replace": "Login",
                "translate": "ログイン"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > div > form > div > div > div > a"
                ],
                "replace": "Forgot password?",
                "translate": "パスワードを紛失しましたか？"
            }
        ]
    },
    {
        "name": "Forgot password",
        "path": "^\/auth/password$",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > div > h2"
                ],
                "replace": "Request Password Reset",
                "translate": "パスワードを再設定する"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > div > form > div > div > label"
                ],
                "replace": "Email",
                "translate": "メールアドレス"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > div > form > div > div > p"
                ],
                "replace": "Enter your account email address to receive instructions on resetting your password.",
                "translate": "アカウントのメールアドレスを入力し、パスワードをリセットする手順を受け取ります。"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > div > form > div > div > p"
                ],
                "replace": "A valid email address must be provided to continue.",
                "translate": "続行するには、有効なメールアドレスを入力する必要があります。"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > div > form > div > div > div > button > span"
                ],
                "replace": "Send Email",
                "translate": "メールを送信"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > div > form > div > div > div > a"
                ],
                "replace": "Return to Login",
                "translate": "ログインに戻る"
            }
        ]
    },
    {
        "name": "Header",
        "path": "^\/(|account.*|server.*)$",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > label"
                ],
                "replace": "Search term",
                "translate": "検索"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > p"
                ],
                "replace": "Enter a server name, uuid, or allocation to begin searching.",
                "translate": "サーバ名、UUID、割り当てを入力して検索"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > p"
                ],
                "replace": "Please enter at least three characters to begin searching.",
                "translate": "検索をするには、3文字以上入力する必要があります。"
            }
        ]
    },
    {
        "name": "Main page",
        "path": "^\/$",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "title"
                ],
                "replace": "Dashboard",
                "translate": "ダッシュボード"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > p"
                ],
                "replace": "Showing your servers",
                "translate": "あなたのサーバのみを表示"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > p"
                ],
                "replace": "Showing other's servers",
                "translate": "他の人のサーバを表示"
            },
        ]
    },
    {
        "name": "Account",
        "path": "^\/account$",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "title"
                ],
                "replace": "Account Overview",
                "translate": "アカウント概要"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > div > a"
                ],
                "replace": "Settings",
                "translate": "設定"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > div > a"
                ],
                "replace": "API Credentials",
                "translate": "API"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > h2",
                    "#app > div > div > section > div > div > div > div > form > div > button > span"
                ],
                "replace": "Update Password",
                "translate": "パスワードを更新"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > form > label",
                    "#modal-portal > div > div > div > div > form > label"
                ],
                "replace": "Current Password",
                "translate": "現在のパスワード"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > form > div > label"
                ],
                "replace": "Confirm New Password",
                "translate": "新しいパスワードの確認"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > form > div > label"
                ],
                "replace": "New Password",
                "translate": "新しいパスワード"
            },
            {
                "properties": [],
                "selectors": [
                    "p.input-help"
                ],
                "replace": "Your new password should be at least 8 characters in length and unique to this website.",
                "translate": "新しいパスワードは、長さが8文字以上で、このWebサイトに固有のものである必要があります。"
            },
            {
                "properties": [],
                "selectors": [
                    "p.input-help"
                ],
                "replace": "You must provide your current password.",
                "translate": "現在のパスワードを入力する必要があります。"
            },
            {
                "properties": [],
                "selectors": [
                    "p.input-help"
                ],
                "replace": "Password is a required field",
                "translate": "新しいパスワードを入力してください。"
            },
            {
                "properties": [],
                "selectors": [
                    "p.input-help"
                ],
                "replace": "Password confirmation does not match the password you entered.",
                "translate": "パスワードの確認が、入力したパスワードと一致していません。"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > h2"
                ],
                "replace": "Update Email Address",
                "translate": "パスワードを更新"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > form > label"
                ],
                "replace": "Email",
                "translate": "メールアドレス"
            },
            {
                "properties": [],
                "selectors": [
                    "p.input-help"
                ],
                "replace": "Email must be a valid email",
                "translate": "メールアドレスは有効なアドレスである必要があります"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > form > div > label"
                ],
                "replace": "Confirm Password",
                "translate": "パスワードを確認"
            },
            {
                "properties": [],
                "selectors": [
                    "p.input-help"
                ],
                "replace": "You must provide your current account password.",
                "translate": "現在のアカウントのパスワードを入力する必要があります。"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > form > div > button > span"
                ],
                "replace": "Update Email",
                "translate": "メールアドレスを更新"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > h2"
                ],
                "replace": "Configure Two Factor",
                "translate": "二段階認証を設定"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > p"
                ],
                "replace": "You do not currently have two-factor authentication enabled on your account. Click the button below to begin configuring it.",
                "translate": "現在、このアカウントで二段階認証を有効にしていません。下のボタンをクリックして、設定を開始してください。"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > p"
                ],
                "replace": "Two-factor authentication is currently enabled on your account.",
                "translate": "二段階認証がこのアカウントでは有効になっています。"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > div > button > span"
                ],
                "replace": "Begin Setup",
                "translate": "設定を開始"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > div > button > span"
                ],
                "replace": "Disable",
                "translate": "無効にする"
            },
            {
                "properties": [],
                "selectors": [
                    "p.input-help"
                ],
                "replace": "You must provider your current password in order to continue.",
                "translate": "続行するには、現在のパスワードを入力する必要があります。"
            },
            {
                "properties": [],
                "selectors": [
                    "p.input-help"
                ],
                "replace": "In order to disable two-factor authentication you will need to provide your account password.",
                "translate": "二段階認証を無効にするには、アカウントのパスワードを入力する必要があります"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > button > span"
                ],
                "replace": "Disable Two-Factor",
                "translate": "二段階認証を無効にする"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > h2"
                ],
                "replace": "Configure Two Factor",
                "translate": "二段階認証を設定"
            },
            {
                "properties": [],
                "selectors": [
                    "p.input-help"
                ],
                "replace": "Enter the code from your authenticator device after scanning the QR image.",
                "translate": "QRコードをスキャンした後、認証システムからのコードを入力します。"
            },
            {
                "properties": [],
                "selectors": [
                    "p.input-help"
                ],
                "replace": "You must provide an authentication code to continue.",
                "translate": "続行するには、認証コードを入力する必要があります。"
            },
            {
                "properties": [],
                "selectors": [
                    "p.input-help"
                ],
                "replace": "Authenticator code must be 6 digits.",
                "translate": "認証コードは6文字の数字である必要があります。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > button > span"
                ],
                "replace": "Setup",
                "translate": "セットアップ"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > h2"
                ],
                "replace": "Two-factor authentication enabled",
                "translate": "二段階認証が有効化されました"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > p"
                ],
                "replace": "Two-factor authentication has been enabled on your account. Should you loose access to this device you'll need to use on of the codes displayed below in order to access your account.",
                "translate": "アカウントで二段階認証が有効になりました。このデバイスにアクセスできなくなった場合は、アカウントにアクセスするために、以下に表示されているコードを使用する必要があります。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > p"
                ],
                "replace": "<strong>These codes will not be displayed again.</strong> Please take note of them now by storing them in a secure repository such as a password manager.",
                "translate": "<strong>このコードは二度と表示されません。</strong>パスワードマネージャなどの安全なリポジトリに保存して、今すぐメモしてください。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > div > button > span"
                ],
                "replace": "Close",
                "translate": "閉じる"
            },
        ]
    },
    {
        "name": "Account > API Key",
        "path": "^\/account/api$",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "title"
                ],
                "replace": "Account API",
                "translate": "アカウントのAPI"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > div > a"
                ],
                "replace": "Settings",
                "translate": "設定"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > div > a"
                ],
                "replace": "API Credentials",
                "translate": "API"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > h2"
                ],
                "replace": "Create API Key",
                "translate": "APIキーを作成する"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > form > div > label"
                ],
                "replace": "Description",
                "translate": "説明"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > form > div > p"
                ],
                "replace": "A description of this API key.",
                "translate": "このAPIキーの説明。"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > form > div > p"
                ],
                "replace": "Description is a required field",
                "translate": "説明は必ず入力する必要があります"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > form > div > p"
                ],
                "replace": "Description must be at least 4 characters",
                "translate": "説明は4文字以上である必要があります"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > form > div > label"
                ],
                "replace": "Allowed IPs",
                "translate": "許可するIPアドレス"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > form > div > p"
                ],
                "replace": "Leave blank to allow any IP address to use this API key, otherwise provide each IP address on a new line.",
                "translate": "空白にした場合、全てのIPアドレスからこのAPIキーを使用できるようにします。それ以外の場合は、行ごとにIPアドレスを指定します。"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > form > div > button > span"
                ],
                "replace": "Create",
                "translate": "作成する"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > h3"
                ],
                "replace": "Your API Key",
                "translate": "あなたのAPIキー"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div  div > section > div > div > div > div > p"
                ],
                "replace": "No API keys exist for this account.",
                "translate": "このアカウントにAPIキーは有りません。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > p"
                ],
                "replace": "The API key you have requested is shown below. Please store this in a safe location, it will not be shown again.",
                "translate": "リクエストしたAPIキーを以下に表示します。<strong>二度と表示されないため</strong>、必ず安全な場所に保管してください。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > div > button > span"
                ],
                "replace": "Close",
                "translate": "閉じる"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > h2"
                ],
                "replace": "API Keys",
                "translate": "作成したAPIキー"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > h2"
                ],
                "replace": "Confirm key deletion",
                "translate": "APIキーの削除"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > p"
                ],
                "replace": "Are you sure you wish to delete this API key? All requests using it will immediately be invalidated and will fail.",
                "translate": "本当にこのAPIキーを削除しますか？これを使用している全てのリクエストは無効になり、失敗するようになります。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > div > button > span"
                ],
                "replace": "Cancel",
                "translate": "キャンセル"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > div > button > span"
                ],
                "replace": "Yes, delete key",
                "translate": "削除する"
            },
        ]
    }
];

(function(){
    if (!String.prototype.format) {
        String.prototype.format = function () {
            var args = arguments;
            return this.replace(/{(\d+)}/g, function (match, number) {
                return typeof args[number] != 'undefined'? args[number]: match;
            });
        };
    }
})();

var enable = true;

function main(domr) {
    if (!enable)
        return;
    json.forEach((rules) => {
        if (!window.location.pathname.match(new RegExp(rules.path)))
            return;

        rules.rules.forEach((obj) => {
            var props = obj.properties;
            var translate = obj.translate;
            var format = obj.format;
            var contains = obj.contains;
            var append = obj.append;
            var ignoreCase = obj.ignoreCase ? true: false;
            var override = obj.override;
            var add = obj.addClasses;

            var doms;
            if (!override && rules.selector != undefined && rules.selector != null)
                doms = [document.querySelectorAll(rules.selector)]
            else
                doms = obj.selectors.map(s => document.querySelectorAll(s));

            for (var i = 0; i < doms.length; i++)
            {
                var domc = doms[i]
                domc.forEach((dom) => {
                    if (domr != undefined && domr != null && dom != null && !dom == domr)
                        return;
                    props.forEach((prop) => {
                        tr(dom, translate, prop, obj["replace"], format, contains, append, ignoreCase, add);
                    });
                    if (props.length == 0 && format != undefined)
                        tr(dom, translate, null, obj["replace"], format, contains, append, ignoreCase, add)
                    else if (props.length == 0 && obj["replace"] == undefined)
                         tr(dom, translate, null, null, format, contains, append, ignoreCase, add)
                    else if (obj["replace"] != undefined)
                        tr(dom, translate, null, obj["replace"], format, contains, append, ignoreCase, add);
                });

            }
        });

    });
}

var config = {
    childList: true,
    subtree: true,
    attributeOldValue: false,
    attributes: false,
    characterData: false
};

var observer = new MutationObserver((r) => {
    /*var flag = false;
    r.forEach((b) => {
        if (b.target)
            if (b.target.className)
                if (b.target.className.includes("Code"))
                flag = true;
        if (b.nextSibling)
            if (b.nextSibling.className)
                if (b.nextSibling.className.includes("Code"))
                flag = true;
        if (b.previousSibling)
            if (b.previousSibling.className)
                if (b.previousSibling.className.includes("Code"))
                flag = true;
    });
    if (flag)
        return;*/
    observer.disconnect();
    main(null);
    observer.observe(document, config);
});
    observer.observe(document, config);

document.kill = () => {
    enable = false;
}

document.update = () => {
    main(null)
}
function cca (str, array, ignoreCase) {
    var a = false;
    array.forEach((ab) => {
        if (a)
            return;
        if (ignoreCase)
            a = str.toLowerCase().includes(ab.toLowerCase());
        else a = str.includes(ab);
    });
    return a;
}

function lower(str, ignoreCase)
{
    return ignoreCase ? str.ignoreCase(): str;
}

function tr(dom, translate, prop, replace, format, contains, append, ignoreCase, add) {
    if (dom == undefined || dom == null)
        return;

    if (contains == null || (contains && !prop && cca(dom.innerHTML, contains, ignoreCase)) || (contains && prop && dom[prop] && cca(dom[prop], contains, ignoreCase)))
        if (add && add.length != 0)
            add.forEach(s => dom.classList.add(s))

    if (translate != undefined)
    {
        if (prop != null)
        {
            if (contains != undefined && contains != null && dom[prop] != null && dom[prop] != undefined && !cca(dom[prop], contains, ignoreCase))
                return;
            if (replace != null && dom[prop] != undefined)
            {
                var a = dom[prop].replace(replace, translate) + (append != undefined && append != null ? append: "");
                if (a != dom[prop])
                    dom[prop] = a;
            }
            else
            {
                var ate = translate + (append != undefined && append != null ? append: "");
                if (ate != dom[prop])
                    dom[prop] = ate;
            }
        }
        else
        {
            if (contains != undefined && contains != null && !cca(dom.innerHTML, contains, ignoreCase))
                return;

            if (replace != null)
            {
                var kawr = dom.innerHTML.replace(replace, translate) + (append != undefined && append != null ? append: "");
                if (dom.innerHTML != kawr)
                    dom.innerHTML = kawr
            }
            else
            {
                var sar = translate + (append != undefined && append != null ? append: "");
                if ( dom.innerHTML != sar)
                    dom.innerHTML = sar;
            }
        }

        return;
    }

    if (dom == null)
        return;

    if (format == undefined || format == null)
        return;

    if (prop != null)
    {
        if (document.querySelector(replace) != null)
            if (contains != undefined && contains != null && dom[prop] != null && dom[prop] != undefined && cca(dom[prop], contains, ignoreCase))
            {
                var propaw = format.format(document.querySelector(replace).outerHTML) + (append != undefined && append != null ? append: "");
                if (dom[prop] != propaw)
                    dom[prop] = propaw;
            }
    }
    else
        if (document.querySelector(replace) != null)
              if (contains != undefined && contains != null && cca(dom.innerHTML, contains, ignoreCase))
              {
                  var inn =  format.format(document.querySelector(replace).outerHTML) + (append != undefined && append != null ? append: "");
                  if (inn != dom.outerHTML)
                      dom.outerHTML = inn;
              }
}


