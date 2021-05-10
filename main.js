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
        "name": "General Button",
        "path": "^\/.*",
        "selector": "button > span",
        "rules": [
            {
                "properties": [],
                "equals": "Login",
                "replace": "Login",
                "translate": "ログイン"
            },
            {
                "properties": [],
                "equals": "Update Password",
                "replace": "Update Password",
                "translate": "パスワードを更新"
            },
            {
                "properties": [],
                "equals": "Update Email",
                "replace": "Update Email",
                "translate": "メールアドレスを更新"
            },
            {
                "properties": [],
                "equals": "Begin Setup",
                "replace": "Begin Setup",
                "translate": "設定を開始"
            },
            {
                "properties": [],
                "equals": "Disable",
                "replace": "Disable",
                "translate": "無効にする"
            },
            {
                "properties": [],
                "equals": "Setup",
                "replace": "Setup",
                "translate": "セットアップ"
            },
            {
                "properties": [],
                "equals": "Close",
                "replace": "Close",
                "translate": "閉じる"
            },
            {
                "properties": [],
                "equals": "Create",
                "replace": "Create",
                "translate": "作成する"
            },
            {
                "properties": [],
                "equals": "Close",
                "replace": "Close",
                "translate": "閉じる"
            },
            {
                "properties": [],
                "equals": "Cancel",
                "replace": "Cancel",
                "translate": "キャンセル"
            },
            {
                "properties": [],
                "euals": "Move",
                "replace": "Move",
                "translate": "移動"
            },
            {
                "properties": [],
                "euals": "Update",
                "replace": "Update",
                "translate": "更新"
            },
            {
                "properties": [],
                "euals": "Edit",
                "replace": "Edit",
                "translate": "編集"
            },
            {
                "properties": [],
                "equals": "Save changes",
                "replace": "Save changes",
                "translate": "変更の保存"
            },
            {
                "properties": [],
                "equals": "Save Changes",
                "replace": "Save Changes",
                "translate": "変更の保存"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > div > form > div > button > span"
                ],
                "equals": "Save",
                "replace": "Save",
                "translate": "保存"
            },
        ]
    },
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
                "replace": "The authentication code must be a number.",
                "translate": "認証コードは数字である必要があります。"
            },
            {
                "properties": [],
                "replace": "The authentication code field is required.",
                "translate": "認証コードを入力する必要があります。"
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
            {
                "properties": [],
                "replace": "The files.0.to field is required.",
                "translate": "ファイル名を指定してください。"
            },
            {
                "properties": [],
                "replace": "The authentication token provided has expired, please refresh the page and try again.",
                "translate": "提供された認証トークンの有効期限が切れています。ページを更新して、再試行してください。"
            },
            {
                "properties": [],
                "replace": "The files.0.mode must be a number.",
                "translate": "権限は数字である必要があります。"
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
        "path": "^\/auth/login",
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
                    "#app > div > div > div > h2"
                ],
                "replace": "Device Checkpoint",
                "translate": "デバイスチェック"
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
                    "#app > div > div > div > form > div > div > div > p"
                ],
                "replace": "Enter the two-factor token generated by your device.",
                "translate": "デバイスによって生成された二段階認証コードを入力します。"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > div > form > div > div > div > button > span"
                ],
                "replace": "Continue",
                "translate": "続ける"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > div > form > div > div > div > a"
                ],
                "replace": "Forgot password?",
                "translate": "パスワードを紛失しましたか？"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > div > form > div > div > div > span"
                ],
                "replace": "I've Lost My Device",
                "translate": "デバイスを紛失しましたか？"
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
                    "#app > div > div > section > div > div > div > h2"
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
                "replace": "Yes, delete key",
                "translate": "削除する"
            },
        ]
    },
    {
        "name": "Server > Header",
        "path": "^\/server/.*$",
        "selectors": [
            "#app > div > div > div > a",
            "title"
        ],
        "rules": [
            {
                "properties": [],
                "replace": "Console",
                "translate": "コンソール"
            },
            {
                "properties": [],
                "replace": "File Manager",
                "translate": "ファイル管理"
            },
            {
                "properties": [],
                "replace": "Databases",
                "translate": "データベース"
            },
            {
                "properties": [],
                "replace": "Schedules",
                "translate": "スケジュール"
            },
            {
                "properties": [],
                "replace": "Users",
                "translate": "ユーザ"
            },
            {
                "properties": [],
                "replace": "Backups",
                "translate": "バックアップ"
            },
            {
                "properties": [],
                "replace": "Network",
                "translate": "ネットワーク"
            },
            {
                "properties": [],
                "replace": "Startup",
                "translate": "スタートアップ"
            },
            {
                "properties": [],
                "replace": "Settings",
                "translate": "設定"
            }
        ]
    },
    {
        "name": "Server > Main",
        "path": "^\/server\/[a-z0-9]+$",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > button > span"
                ],
                "replace": "Start",
                "translate": "起動"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > button > span"
                ],
                "replace": "Restart",
                "translate": "再起動"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > button > span"
                ],
                "replace": "Stop",
                "translate": "停止"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > button > span"
                ],
                "replace": "Kill",
                "translate": "強制停止"
            },
            {
                "properties": [
                    "placeholder"
                ],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > input"
                ],
                "replace": "Type a command...",
                "translate": "コマンドを入力…"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > div > p"
                ],
                "replace": "Memory usage",
                "translate": "メモリ使用率"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > div > p"
                ],
                "replace": "CPU usage",
                "translate": "CPU使用率"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > div > p"
                ],
                "replace": "Server is offline.",
                "translate": "サーバはオフラインです。"
            },
        ]
    },
    {
        "name": "Server > File Manager",
        "path": "^\/server\/[a-z0-9]+\/files#?([^(/new)(/edit)])*$",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > div > div > p"
                ],
                "replace": "Drag and drop files to upload.",
                "translate": "ファイルをドラッグ&ドロップしてアップロードします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > button > span",
                    "#modal-portal > div > div > div > div > form > div > button > span"
                ],
                "replace": "Create Directory",
                "translate": "ディレクトリを作成"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > label"
                ],
                "replace": "Directory Name",
                "translate": "ディレクトリ名"
            },
            {
                "properties": [],
                "selectors": [
                    "p.input-help"
                ],
                "replace": "A valid directory name must be provided.",
                "translate": "正しいディレクトリ名を入力する必要があります。"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > button > span"
                ],
                "replace": "Upload",
                "translate": "アップロード"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > button > span"
                ],
                "replace": "New File",
                "translate": "新しいファイル"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > button > span",
                    "#modal-portal > div > div > div > div > form > div > button > span"
                ],
                "replace": "Create File",
                "translate": "ファイルを作成"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > label"
                ],
                "replace": "File Name",
                "translate": "ファイル名"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > p"
                ],
                "replace": "Enter the name that this file should be saved as.",
                "translate": "保存するファイルの名前を入力します。"
            },
            {
                "properties": [],
                "selectors": [
                    "p.input-help"
                ],
                "replace": "FileName is a required field",
                "translate": "ファイル名を入力してください。"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > button > span",
                    "#app > div > div > section > div > div > div > div > div > div > div > span"
                ],
                "replace": "Archive",
                "translate": "アーカイブ化"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > button > span",
                    "#app > div > div > section > div > div > div > div > div > div > div > span"
                ],
                "replace": "Delete",
                "translate": "削除"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > label"
                ],
                "replace": "File Name",
                "translate": "ファイル名"
            },
            {
                "properties": [],
                "selectors": [
                    "p.input-help"
                ],
                "replace": "Enter the new name and directory of this file or folder, relative to the current directory.",
                "translate": "現在のディレクトリを基準にして、このファイルまたはフォルダの新しい名前とディレクトリを入力します。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > p > strong"
                ],
                "replace": "New location",
                "translate": "新しい場所"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > h2"
                ],
                "replace": "Delete these files?",
                "translate": "本当にこのファイルを削除しますか？"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > h2"
                ],
                "replace": "Delete this file?",
                "translate": "本当にこのファイルを削除しますか？"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > h2"
                ],
                "replace": "Delete this File?",
                "translate": "本当にこのファイルを削除しますか？"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > h2"
                ],
                "replace": "Delete this Directory?",
                "translate": "本当にこのディレクトリを削除しますか？"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > h2"
                ],
                "replace": "Delete theese Directories?",
                "translate": "本当にこのディレクトリを削除しますか？"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > p"
                ],
                "replace": "Deleting files is a permanent operation, you cannot undo this action.",
                "translate": "ファイルの削除は永続的な操作であり、この操作を元に戻すことはできません。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > div > button > span"
                ],
                "replace": "Yes, Delete Files",
                "translate": "削除する"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > div > button > span"
                ],
                "replace": "Yes, Delete File",
                "translate": "削除する"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > div > button > span"
                ],
                "replace": "Yes, Delete Directory",
                "translate": "削除する"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div",
                ],
                "replace": "Bytes",
                "translate": "バイト"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div",
                ],
                "replace": "kB",
                "translate": "キロバイト"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div",
                ],
                "replace": "MB",
                "translate": "メガバイト"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div",
                ],
                "replace": "GB",
                "translate": "ギガバイト"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div",
                ],
                "replace": "TB",
                "translate": "テラバイト"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div",
                ],
                "replace": "PB",
                "translate": "ペタバイト"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div",
                ],
                "replace": "EB",
                "translate": "エクサバイト"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div",
                ],
                "replace": "ZB",
                "translate": "ゼタバイト"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div",
                ],
                "replace": "YB",
                "translate": "ヨタバイト"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div"
                ],
                "replace": "about ",
                "translate": "約"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div"
                ],
                "replace": "ago",
                "translate": "前"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div"
                ],
                "replace": " minute ",
                "translate": "分"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div"
                ],
                "replace": " hour ",
                "translate": "時間"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div"
                ],
                "replace": " day ",
                "translate": "日"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div"
                ],
                "replace": " minutes ",
                "translate": "分"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div"
                ],
                "replace": " hours ",
                "translate": "時間"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div"
                ],
                "replace": " days ",
                "translate": "日"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div"
                ],
                "replace": "Jan ",
                "translate": "1月"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div"
                ],
                "replace": "Feb ",
                "translate": "2月"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div"
                ],
                "replace": "Mar ",
                "translate": "3月"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div"
                ],
                "replace": "Apr ",
                "translate": "4月"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div"
                ],
                "replace": "May ",
                "translate": "5月"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div"
                ],
                "replace": "June ",
                "translate": "6月"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div"
                ],
                "replace": "July ",
                "translate": "7月"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div"
                ],
                "replace": "Aug ",
                "translate": "8月"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div"
                ],
                "replace": "Sept ",
                "translate": "9月"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div"
                ],
                "replace": "Oct ",
                "translate": "10月"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div"
                ],
                "replace": "Nov ",
                "translate": "11月"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div"
                ],
                "replace": "Dec ",
                "translate": "12月"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div"
                ],
                "replace": "in less than a minute",
                "translate": "たった今"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > a > div",
                    "#app > div > div > section > div > div > div > div > div"
                ],
                "replace": "th, ",
                "translate": "日"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > div > div > span",
                    "#modal-portal > div > div > div > div > form > div > div > button > span"
                ],
                "replace": "Rename",
                "translate": "名前変更"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > div > div > span"
                ],
                "replace": "Move",
                "translate": "移動"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > div > div > span"
                ],
                "replace": "Download",
                "translate": "ダウンロード"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > div > div > span"
                ],
                "replace": "Permissions",
                "translate": "権限"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > div > div > span"
                ],
                "replace": "Copy",
                "translate": "コピー"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > div > div > span"
                ],
                "replace": "Unarchive",
                "translate": "解凍"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > label"
                ],
                "replace": "File Mode",
                "translate": "権限"
            }
        ]
    },
    {
        "name": "Server > File Manager > Editor",
        "path": "^\/server\/[a-z0-9]+\/files(\/new|\/edit(#.*)?|#.*)?$",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > button > span"
                ],
                "replace": "Save Content",
                "translate": "内容を保存"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > button > span"
                ],
                "replace": "Create File",
                "translate": "ファイルを作成"
            },
        ]
    },
    {
        "name": "Server > Databases",
        "path": "^\/server\/[a-z0-9]+\/databases",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > p"
                ],
                "replace": "Databases cannot be created for this server.",
                "translate": "データベースはこのサーバでは利用できません。"
            },
        ]
    },
    {
        "name": "Server > Schedules",
        "path": "^\/server\/[a-z0-9]+\/schedules(\/\d+)?",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > p"
                ],
                "replace": "There are no schedules configured for this server.",
                "translate": "このサーバではスケジュールが設定されていません。"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > button > span",
                    "#modal-portal > div > div > div > div > form > div > button > span"
                ],
                "replace": "Create schedule",
                "translate": "スケジュールを作成"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > h3"
                ],
                "replace": "Create new schedule",
                "translate": "新しいスケジュールを作成"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > label"
                ],
                "replace": "Schedule name",
                "translate": "スケジュール名"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > p.input-help"
                ],
                "replace": "A human readable identifer for this schedule",
                "translate": "人間が理解できるスケジュールの名前"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div",
                    "#app > div > div > section > div > a > div > div > p",
                    "#app > div > div > section > div > div > div > p"
                ],
                "replace": "Minute",
                "translate": "分"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div",
                    "#app > div > div > section > div > a > div > div > p",
                    "#app > div > div > section > div > div > div > p"
                ],
                "replace": "Hour",
                "translate": "時間"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div"
                ],
                "replace": "Day of month",
                "translate": "一ヶ月に"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div"
                ],
                "replace": "Day of week",
                "translate": "一週間に"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > p"
                ],
                "replace": "The schedule system supports the use of Cronjob syntax when defining when tasks should begin running. Use the fields above to specify when these tasks should begin running.",
                "translate": "スケジュールシステムは、タスクの実行を開始するタイミングを定義するときに、Cronjob構文の使用をサポートします。上記のフィールドを使用して、これらのタスクの実行を開始するタイミングを指定します。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > div > label"
                ],
                "replace": "Enabled",
                "translate": "有効化"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > div > p"
                ],
                "replace": "If disabled, this schedule and it's associated tasks will not run.",
                "translate": "無効にした場合このスケジュールまたはタスクは実行されません。"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > a > div > p",
                    "#app > div > div > section > div > div > div > div > p"
                ],
                "replace": "Last run at:",
                "translate": "最終実行："
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > a > div > div > p",
                    "#app > div > div > section > div > div > div > p"
                ],
                "replace": "Month",
                "translate": "月"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > a > div > div > p",
                    "#app > div > div > section > div > div > div > p"
                ],
                "replace": "Day ",
                "translate": "日 "
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > a > div > div > p",
                    "#app > div > div > section > div > div > div > p"
                ],
                "replace": "(Week)",
                "translate": "(週)"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > a > div > p",
                    "#app > div > div > section > div > div > div > div > h3 > span"
                ],
                "replace": "Active",
                "translate": "アクティブ"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > a > div > p",
                    "#app > div > div > section > div > div > div > div > h3 > span"
                ],
                "replace": "Inactive",
                "translate": "無効"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > p"
                ],
                "replace": "Next run at:",
                "translate": "次の実行："
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > h3"
                ],
                "replace": "Edit schedule",
                "translate": "スケジュールの編集"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > button > span"
                ],
                "replace": "New Task",
                "translate": "新しいタスク"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > h2"
                ],
                "replace": "Create Task",
                "translate": "タスクを作成"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > h2"
                ],
                "replace": "Edit Task",
                "translate": "タスクを編集"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > label"
                ],
                "replace": "Action",
                "translate": "動作"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > select"
                ],
                "replace": "Send command",
                "translate": "コマンド送信"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > select"
                ],
                "replace": "Send power action",
                "translate": "起動モードを送信"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > select"
                ],
                "replace": "Create backup",
                "translate": "バックアップを作成"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > p"
                ],
                "replace": "Send Command",
                "translate": "コマンド送信"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > p"
                ],
                "replace": "Send Power Action",
                "translate": "起動モードを送信"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > p"
                ],
                "replace": "Create Backup",
                "translate": "バックアップを作成"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > label"
                ],
                "replace": "Time offset (in seconds)",
                "translate": "実行間隔(秒数)"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > p"
                ],
                "replace": "The amount of time to wait after the previous task executes before running this one. If this is the first task on a schedule this will not be applied.",
                "translate": "前のタスクが実行されてから、このタスクを実行するまでの感覚です。このタスクがスケジュールの最初のタスクである場合、これは適用されません。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > p"
                ],
                "replace": "The time offset must be a valid number between 0 and 900.",
                "translate": "時間は有効な数字であり、0から900までの整数である必要があります。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > label"
                ],
                "replace": "Payload",
                "translate": "送信するペイロード"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > p"
                ],
                "replace": "A task payload must be provided.",
                "translate": "ペイロードは必ず指定する必要があります。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > select"
                ],
                "replace": "Start the server",
                "translate": "サーバを起動"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > select"
                ],
                "replace": "Restart the server",
                "translate": "サーバを再起動"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > select"
                ],
                "replace": "Stop the server",
                "translate": "サーバを停止"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > select"
                ],
                "replace": "Terminate the server",
                "translate": "サーバを強制起動"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > label"
                ],
                "replace": "Ignored Files",
                "translate": "除外するファイル"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > p"
                ],
                "replace": "Optional. Include the files and folders to be excluded in this backup. By default, the contents of your .pteroignore file will be used. If you have reached your backup limit, the oldest backup will be rotated.",
                "translate": "オプションです。このバックアップで除外するファイルとフォルダを記述します。デフォルトでは、.pteroignoreファイルの内容が適用されます。また、バックアップのファイル数が制限に達した場合、古いバックアップから順番に置換されます。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > button > span"
                ],
                "replace": "Create Task",
                "translate": "タスクを作成"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > h2"
                ],
                "replace": "Confirm task deletion",
                "translate": "タスクの削除"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > p"
                ],
                "replace": "Are you sure you want to delete this task? This action cannot be undone.",
                "translate": "本当にこのタスクを削除しますか？この操作を戻すことはできません。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > div > button > span"
                ],
                "replace": "Delete Task",
                "translate": "タスクを削除"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > button > span"
                ],
                "replace": "Delete",
                "translate": "削除"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > h2"
                ],
                "replace": "Delete schedule?",
                "translate": "本当にこのスケジュールを削除しますか？"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > p"
                ],
                "replace": "Are you sure you want to delete this schedule? All tasks will be removed and any running processes will be terminated.",
                "translate": "本当にこのスケジュールを削除しますか？このスケジュールに関連するタスクも削除され、実行中のタスクは強制終了します。この操作を戻すことはできません。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > div > button > span"
                ],
                "replace": "Yes, delete schedule",
                "translate": "スケジュールを削除"
            },
        ]
    },
    {
        "name": "Server > Users",
        "path": "^\/server\/[a-z0-9]+\/users",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > p"
                ],
                "replace": "It looks like you don't have any subusers.",
                "translate": "サブユーザがいないようです。"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > button > span"
                ],
                "replace": "New User",
                "translate": "ユーザを追加"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > h2"
                ],
                "replace": "Create new subuser",
                "translate": "新しいサブユーザを追加"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > button > span",
                    "#modal-portal > div > div > div > div > form > div > button > span"
                ],
                "replace": "Invite User",
                "translate": "ユーザを招待"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > label"
                ],
                "replace": "User Email",
                "translate": "ユーザのメールアドレス"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > p"
                ],
                "replace": "Enter the email address of the user you wish to invite as a subuser for this server.",
                "translate": "このサーバのサブユーザとして追加するサブユーザのメールアドレスです。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > p"
                ],
                "replace": "A valid email address must be provided.",
                "translate": "ユーザの正しいメールアドレスを指定する必要があります。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > div > p"
                ],
                "replace": "control",
                "translate": "操作"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > p"
                ],
                "replace": "Permissions that control a user's ability to control the power state of a server, or send commands.",
                "translate": "サーバの動作状態を制御したり、コマンドを送信したりするユーザーの機能を制御する権限です。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to send commands to the server instance via the console.",
                "translate": "ユーザがコンソールを介してサーバにコマンドを送信できるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "console",
                "translate": "コンソール"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to start the server if it is stopped.",
                "translate": "サーバが停止していた際にサーバを起動することができるようになります。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to perform a server restart. This allows them to start the server if it is offline, but not put the server in a completely stopped state.",
                "translate": "ユーザがサーバの再起動を実行できるようにします。これにより、サーバがオフラインの場合はサーバを起動できますが、サーバを完全に停止した状態にすることはできません。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "restart",
                "translate": "再起動"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "equals": "start",
                "replace": "start",
                "translate": "起動"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to stop a server if it is running.",
                "translate": "サーバが起動している時に、サーバを停止することができるようになります。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "stop",
                "translate": "停止"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > div > p"
                ],
                "equals": "user",
                "replace": "user",
                "translate": "ユーザ"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > p"
                ],
                "replace": "Permissions that allow a user to manage other subusers on a server. They will never be able to edit their own account, or assign permissions they do not have themselves.",
                "translate": "ユーザがサーバの他のサブユーザーを管理できるようにする権限です。自分のアカウントを編集したり、自分にない権限を割り当てたりすることはできません。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "equals": "create",
                "replace": "create",
                "translate": "作成"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to create new subusers for the server.",
                "translate": "ユーザがサーバの新しいサブユーザーを作成できるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "equals": "read",
                "replace": "read",
                "translate": "閲覧"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows the user to view subusers and their permissions for the server.",
                "translate": "ユーザがサーバのサブユーザとその権限を表示できるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "equals": "update",
                "replace": "update",
                "translate": "更新"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to modify other subusers.",
                "translate": "ユーザが他のサブユーザを変更できるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "equals": "delete",
                "replace": "delete",
                "translate": "削除"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to delete a subuser from the server.",
                "translate": "ユーザがサーバからサブユーザを削除できるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > div > p"
                ],
                "equals": "file",
                "replace": "file",
                "translate": "ファイル"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > p"
                ],
                "replace": "Permissions that control a user's ability to modify the filesystem for this server.",
                "translate": "ユーザがサーバのファイルを変更できるようにする権限です。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "equals": "delete",
                "replace": "delete",
                "translate": "削除"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to create additional files and folders via the Panel or direct upload.",
                "translate": "ユーザがパネルまたは直接アップロードを介して追加のファイルおよびフォルダを作成できるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to view the contents of a directory, but not view the contents of or download files.",
                "translate": "ユーザがディレクトリの内容を表示できるようにしますが、ファイルの内容を表示したりダウンロードしたりすることはできません。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "read-content",
                "translate": "内容を閲覧"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to view the contents of a given file. This will also allow the user to download files.",
                "translate": "ユーザが特定のファイルの内容を表示できるようにします。これにより、ユーザはファイルをダウンロードすることもできます。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to update the contents of an existing file or directory.",
                "translate": "ユーザーが既存のファイルまたはディレクトリの内容を更新できるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to delete files or directories.",
                "translate": "ユーザがファイルまたはディレクトリを削除できるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "equals": "archive",
                "replace": "archive",
                "translate": "アーカイブ"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to archive the contents of a directory as well as decompress existing archives on the system.",
                "translate": "ユーザがディレクトリの内容をアーカイブしたり、システム上の既存のアーカイブを解凍したりできるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to connect to SFTP and manage server files using the other assigned file permissions.",
                "translate": "ユーザがSFTPに接続し、他の割り当てられたファイル権限を使用してサーバーファイルを管理できるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > div > p"
                ],
                "equals": "backup",
                "replace": "backup",
                "translate": "バックアップ"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > p"
                ],
                "replace": "Permissions that control a user's ability to generate and manage server backups.",
                "translate": "サーバのバックアップを作成および管理するユーザの機能を制御するアクセス許可。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to create new backups for this server.",
                "translate": "ユーザがこのサーバの新しいバックアップを作成できるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to view all backups that exist for this server.",
                "translate": "ユーザーがこのサーバーに存在するすべてのバックアップを表示できるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to remove backups from the system.",
                "translate": "ユーザがシステムからバックアップを削除できるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "equals": "download",
                "replace": "download",
                "translate": "ダウンロード"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to download backups.",
                "translate": "ユーザがバックアップをダウンロードできるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > div > p"
                ],
                "replace": "allocation",
                "translate": "割り当て"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > p"
                ],
                "replace": "Permissions that control a user's ability to modify the port allocations for this server.",
                "translate": "このサーバーのポート割り当てを変更するユーザーの機能を制御するアクセス許可。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to view all allocations currently assigned to this server. Users with any level of access to this server can always view the primary allocation.",
                "translate": "ユーザがこのサーバに現在割り当てられているすべての割り当てを表示できるようにします。このサーバへの任意のレベルのアクセス権を持つユーザは、いつでもプライマリ割り当てを表示できます。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > div > p"
                ],
                "replace": "Allows a user to assign additional allocations to the server.",
                "translate": "ユーザがサーバに追加の割り当てをすることができるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > div > p"
                ],
                "replace": "Allows a user to change the primary server allocation and attach notes to each allocation.",
                "translate": "ユーザがプライマリサーバの割り当てを変更し、各割り当てにメモを添付できるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > div > p"
                ],
                "replace": "Allows a user to delete an allocation from the server.",
                "translate": "ユーザーがサーバーから割り当てを削除できるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to assign additional allocations to the server.",
                "translate": "ユーザがサーバに追加の割り当てを割り当てることができるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to change the primary server allocation and attach notes to each allocation.",
                "translate": "ユーザがプライマリサーバの割り当てを変更し、各割り当てにメモを添付できるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to delete an allocation from the server.",
                "translate": "ユーザがサーバから割り当てを削除できるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > div > p"
                ],
                "replace": "startup",
                "translate": "スタートアップ"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > p"
                ],
                "replace": "Permissions that control a user's ability to view this server's startup parameters.",
                "translate": "このサーバの起動パラメータを表示するユーザの機能を制御するアクセス許可。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to view the startup variables for a server.",
                "translate": "ユーザがサーバの起動変数を表示できるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to modify the startup variables for the server.",
                "translate": "ユーザがサーバの起動変数を変更できるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "docker-image",
                "translate": "Dockerイメージ"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to modify the Docker image used when running the server.",
                "translate": "サーバの実行時に使用されるDockerイメージをユーザが変更できるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > div > p"
                ],
                "replace": "database",
                "translate": "データベース"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > p"
                ],
                "replace": "Permissions that control a user's access to the database management for this server.",
                "translate": "このサーバのデータベース管理へのユーザのアクセスを制御する権限です。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to create a new database for this server.",
                "translate": "ユーザがこのサーバの新しいデータベースを作成できるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to view the database associated with this server.",
                "translate": "ユーザがこのサーバに関連付けられているデータベースを表示できるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to create a new database for this server.",
                "translate": "ユーザがこのサーバの新しいデータベースを作成できるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to rotate the password on a database instance. If the user does not have the view_password permission they will not see the updated password.",
                "translate": "ユーザがデータベースのパスワードを変更できるようにします。ユーザーにview_password権限がない場合、更新されたパスワードは表示されません。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to remove a database instance from this server.",
                "translate": "ユーザがこのサーバからデータベースを削除できるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to view the password associated with a database instance for this server.",
                "translate": "ユーザがこのサーバのデータベースに関連付けられたパスワードを表示できるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > div > p"
                ],
                "replace": "schedule",
                "translate": "スケジュール"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > p"
                ],
                "replace": "Permissions that control a user's access to the schedule management for this server.",
                "translate": "このサーバのデータベース管理へのユーザのアクセスを制御する権限です。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to create new schedules for this server.",
                "translate": "ユーザがこのサーバーの新しいスケジュールを作成できるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to view schedules and the tasks associated with them for this server.",
                "translate": "ユーザがこのサーバのスケジュールとそれに関連付けられているタスクを表示できるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to update schedules and schedule tasks for this server.",
                "translate": "ユーザがこのサーバのスケジュールを更新し、タスクをスケジュールできるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to delete schedules for this server.",
                "translate": "ユーザーがこのサーバーのスケジュールを削除できるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > div > p"
                ],
                "replace": "settings",
                "translate": "設定"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > p"
                ],
                "replace": "Permissions that control a user's access to the settings for this server.",
                "translate": "このサーバーの設定へのユーザーのアクセスを制御する権限です。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to rename this server.",
                "translate": "ユーザがこのサーバの名前を変更できるようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > form > div > div > div > label > div > p"
                ],
                "replace": "Allows a user to trigger a reinstall of this server.",
                "translate": "ユーザがこのサーバの再インストールをトリガーできるようにします。"
            },
        ]
    },
    {
        "name": "Server > Backups",
        "path": "^\/server\/[a-z0-9]+\/backups",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > p"
                ],
                "replace": "Backups cannot be created for this server.",
                "translate": "バックアップはこのサーバでは利用できません。"
            },
        ]
    },
    {
        "name": "Server > Network",
        "path": "^\/server\/[a-z0-9]+\/network",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > label"
                ],
                "replace": "Hostname",
                "translate": "ホスト名"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > label"
                ],
                "replace": "Port",
                "translate": "ポート"
            },
            {
                "properties": [
                    "placeholder"
                ],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > textarea"
                ],
                "replace": "Notes",
                "translate": "ノート"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > span"
                ],
                "replace": "Primary",
                "translate": "主要"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > p"
                ],
                "contains": [
                    "You are currently using "
                ],
                "replace": "of",
                "translate": "つのネットワークを使用しており、このサーバでは"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > p"
                ],
                "replace": "You are currently using ",
                "translate": "現在、"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > p"
                ],
                "replace": " allowed allocations for this server.",
                "translate": "つがこのサーバでは利用可能です。"
            },
        ]
    },
    {
        "name": "Server > Startup",
        "path": "^\/server\/[a-z0-9]+\/startup",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > p"
                ],
                "replace": "Startup Command",
                "translate": "起動コマンド"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > p"
                ],
                "replace": "Docker Image",
                "translate": "Dockerイメージ"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > p"
                ],
                "replace": "This is an advanced feature allowing you to select a Docker image to use when running this server instance.",
                "translate": "これは高度な機能であり、このサーバインスタンスの実行時に使用するDockerイメージを選択できます。"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > p"
                ],
                "replace": "Variables",
                "translate": "変数"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > p > span"
                ],
                "replace": "Read Only",
                "translate": "閲覧のみ"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > p"
                ],
                "replace": "Minecraft Version",
                "translate": "Minecraftのバージョン"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > p"
                ],
                "replace": "The version of minecraft to download.",
                "translate": "ダウンロードするMinecraftのバージョンです。"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > p"
                ],
                "replace": "Leave at latest to always get the latest version. Invalid versions will default to latest.",
                "translate": "常に最新バージョンを入手するには、latestを使用してください。無効なバージョンはデフォルトで最新になります。"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > p > span"
                ],
                "replace": "Server Jar File",
                "translate": "サーバのJarファイル"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > p"
                ],
                "replace": "The name of the server jarfile to run the server with.",
                "translate": "サーバを実行するサーバのjarファイルの名前です。"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > p"
                ],
                "replace": "Build Number",
                "translate": "ビルド番号"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > p"
                ],
                "replace": "The build number for the paper release.",
                "translate": "Paperのビルド番号です。"
            },
        ]
    },
    {
        "name": "Server > Settings",
        "path": "^\/server\/[a-z0-9]+\/settings$",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > p"
                ],
                "replace": "SFTP Details",
                "translate": "SFTP情報"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > div > label"
                ],
                "replace": "Server Address",
                "translate": "サーバアドレス"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > div > label"
                ],
                "replace": "Username",
                "translate": "ユーザ名"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > div > div > div > p"
                ],
                "replace": "Your SFTP password is the same as the password you use to access this panel.",
                "translate": "SFTPパスワードは、このパネルへのアクセスに使用するパスワードと同じです"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > div > div > a"
                ],
                "replace": "Launch SFTP",
                "translate": "SFTPを起動"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > div > p"
                ],
                "replace": "Change Server Name",
                "translate": "サーバ名を変更"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > div > form > label"
                ],
                "replace": "Server Name",
                "translate": "サーバ名"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > div > form > p"
                ],
                "replace": "Name is a required field",
                "translate": "名前は必ず指定する必要があります。"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > p"
                ],
                "replace": "Debug Information",
                "translate": "デバッグ情報"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > div > p"
                ],
                "replace": "Node",
                "translate": "ノード"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > div > p"
                ],
                "replace": "Server ID",
                "translate": "サーバID"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > p"
                ],
                "replace": "Reinstall Server",
                "translate": "サーバを再インストール"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > p"
                ],
                "replace": "Reinstalling your server will stop it, and then re-run the installation script that initially set it up.",
                "translate": "サーバを再インストールするとサーバが停止し、最初に設定したインストールスクリプトを再実行します。"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > p > strong"
                ],
                "replace": "Some files may be deleted or modified during this process, please back up your data before continuing.",
                "translate": "このプロセス中に一部のファイルが削除または変更される可能性があります。続行する前にデータをバックアップしてください。"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > div > button > span"
                ],
                "replace": "Reinstall Server",
                "translate": "サーバを再インストール"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > h2"
                ],
                "replace": "Confirm server reinstallation",
                "translate": "本当にサーバを再インストールしますか？"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > p"
                ],
                "replace": "Your server will be stopped and some files may be deleted or modified during this process, are you sure you wish to continue?",
                "translate": "このプロセス中にサーバが停止し、一部のファイルが削除または変更される可能性があります。続行しますか？"
            },
            {
                "properties": [],
                "selectors": [
                    "#modal-portal > div > div > div > div > div > button"
                ],
                "replace": "Yes, reinstall server",
                "translate": "サーバを再インストールする"
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > div > div > div > p"
                ],
                "replace": "Copied",
                "translate": ""
            },
            {
                "properties": [],
                "selectors": [
                    "#app > div > div > section > div > div > div > div > div > div > div > div > p"
                ],
                "replace": "to clipboard.",
                "translate": "をクリップボードにコピーしました。"
            },
        ]
    },
    {
        "name": "Admin > header",
        "path": "^\/admin",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "body > div > aside > div > section > ul > li"
                ],
                "replace": "BASIC ADMINISTRATION",
                "translate": "通常の管理"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > aside > div > section > ul > li > a > span"
                ],
                "replace": "Overview",
                "translate": "概要"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > aside > div > section > ul > li > a > span"
                ],
                "replace": "Settings",
                "translate": "設定"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > aside > div > section > ul > li > a > span"
                ],
                "replace": "Application API",
                "translate": "API"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > aside > div > section > ul > li"
                ],
                "equals": "MANAGEMENT",
                "replace": "MANAGEMENT",
                "translate": "高度な管理"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > aside > div > section > ul > li > a > span"
                ],
                "replace": "Databases",
                "translate": "データベース"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > aside > div > section > ul > li > a > span"
                ],
                "replace": "Locations",
                "translate": "場所"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > aside > div > section > ul > li > a > span"
                ],
                "replace": "Nodes",
                "translate": "ノード"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > aside > div > section > ul > li > a > span"
                ],
                "replace": "Servers",
                "translate": "サーバ"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > aside > div > section > ul > li > a > span"
                ],
                "replace": "Users",
                "translate": "ユーザ"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > aside > div > section > ul > li"
                ],
                "replace": "SERVICE MANAGEMENT",
                "translate": "サービスの管理"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > aside > div > section > ul > li > a > span"
                ],
                "replace": "Mounts",
                "translate": "マウント"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > aside > div > section > ul > li > a > span"
                ],
                "replace": "Nests",
                "translate": "ネスト"
            },
        ]
    },
    {
        "name": "Admin > header",
        "path": "^\/admin$",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > h1"
                ],
                "replace": "Administrative Overview",
                "translate": "管理概要"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > h1 > small"
                ],
                "replace": "A quick glance at your system.",
                "translate": "システムをひと目で閲覧できます。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > h3"
                ],
                "replace": "System Information",
                "translate": "システム情報"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div"
                ],
                "replace": "Your panel is",
                "translate": "あなたのパネルは"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > strong"
                ],
                "replace": "not up-to-date!",
                "translate": "アップデートされていません！"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div"
                ],
                "replace": "The latest version is",
                "translate": "最新バージョンは"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div"
                ],
                "replace": " and you are currently running version ",
                "translate": "ですが、現在実行中のバージョンは"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > a > button"
                ],
                "replace": "Get Help",
                "translate": "助けを得る"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > a > button"
                ],
                "replace": "Documentation",
                "translate": "ドキュメント"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > a > button"
                ],
                "replace": "Github",
                "translate": "GitHub"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > a > button"
                ],
                "replace": "Support the Project",
                "translate": "プロジェクトをサポート"
            },
        ]
    },
    {
        "name": "Admin > Settings > General",
        "path": "^\/admin\/settings",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > ul > li > a"
                ],
                "replace": "General",
                "translate": "一般"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > ul > li > a"
                ],
                "replace": "Mail",
                "translate": "メール"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > ul > li > a"
                ],
                "replace": "Advanced",
                "translate": "高度"
            },
        ]
    },
    {
        "name": "Admin > Settings > Panel Settings",
        "path": "^\/admin\/settings$",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > h1",
                    "body > div > div > section > div > div > div > div > h3"
                ],
                "replace": "Panel Settings",
                "translate": "パネル設定"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > h1 > small"
                ],
                "replace": "Configure Pterodactyl to your liking.",
                "translate": "好みに合わせてPterodactylを設定します。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > form > div > div > div > label"
                ],
                "replace": "Company Name",
                "translate": "会社名"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > form > div > div > div > div > p > small"
                ],
                "replace": "This is the name that is used throughout the panel and in emails sent to clients.",
                "translate": "これは、パネル全体およびクライアントに送信される電子メールで使用される名前です。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > form > div > div > div > label"
                ],
                "replace": "Google Analytics",
                "translate": "Googleアナリティクス"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > form > div > div > div > div > p > small"
                ],
                "replace": "This is your Google Analytics Tracking ID, Ex. UA-123723645-2",
                "translate": "これはあなたのGoogleアナリティクス トラッキングIDです。 例：UA-123723645-2"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > form > div > div > div > label"
                ],
                "replace": "Require 2-Factor Authentication",
                "translate": "二段階認証の要求"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > form > div > div > div > div > div > label"
                ],
                "replace": "Not Required",
                "translate": "要求しない"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > form > div > div > div > div > div > label"
                ],
                "replace": "Admin Only",
                "translate": "管理者のみ"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > form > div > div > div > div > div > label"
                ],
                "replace": "All Users",
                "translate": "すべてのユーザ"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > form > div > div > div > div > p > small"
                ],
                "replace": "If enabled, any account falling into the selected grouping will be required to have 2-Factor authentication enabled to use the Panel.",
                "translate": "有効にした場合、選択したグループに分類されるアカウントでは、パネルを使用するために二段階認証を有効にする必要があります。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > form > div > div > div > label"
                ],
                "replace": "Default Language",
                "translate": "既定の言語"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > form > div > div > div > div > p > small"
                ],
                "replace": "The default language to use when rendering UI components.",
                "translate": "UIに使用される言語です。"
            }
        ]
    },
    {
        "name": "Admin > Settings > Email",
        "path": "^\/admin\/settings\/mail$",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > h1",
                    "body > div > div > section > div > div > div > div > h3"
                ],
                "replace": "Mail Settings",
                "translate": "メール設定"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > h1 > small"
                ],
                "replace": "Configure how Pterodactyl should handle sending emails.",
                "translate": "Pterodactylが電子メールの送信を処理する方法を構成します。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > h3"
                ],
                "replace": "Email Settings",
                "translate": "メール設定"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > form > div > div > div > label"
                ],
                "replace": "SMTP Host",
                "translate": "SMTPホスト"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > form > div > div > div > div > p"
                ],
                "replace": "Enter the SMTP server address that mail should be sent through.",
                "translate": "メールを送信するSMTPサーバアドレスを入力します。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > form > div > div > div > label"
                ],
                "replace": "SMTP Port",
                "translate": "SMTPポート"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > form > div > div > div > div > p"
                ],
                "replace": "Enter the SMTP server port that mail should be sent through.",
                "translate": "メールの送信元となるSMTPサーバのポートを入力します。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > form > div > div > div > label"
                ],
                "replace": "Encryption",
                "translate": "暗号化"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > form > div > div > div > div > p"
                ],
                "replace": "Select the type of encryption to use when sending mail.",
                "translate": "メールを送信するときに使用する暗号化のタイプを選択します。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > form > div > div > div > label"
                ],
                "replace": "Username",
                "translate": "ユーザ名"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > form > div > div > div > div > p"
                ],
                "replace": "The username to use when connecting to the SMTP server.",
                "translate": "SMTPサーバに接続するときに使用するユーザー名です。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > form > div > div > div > label"
                ],
                "replace": "Password",
                "translate": "パスワード"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > form > div > div > div > div > p"
                ],
                "replace": "The password to use in conjunction with the SMTP username. Leave blank to continue using the existing password. To set the password to an empty value enter ",
                "translate": "SMTPユーザー名と組み合わせて使用するパスワードです。既存のパスワードを引き続き使用するには、空白のままにします。パスワードを空の値に設定するには、"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > form > div > div > div > div > p"
                ],
                "replace": "into the field",
                "translate": "と入力してください。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > form > div > div > div > label"
                ],
                "replace": "Mail From Name",
                "translate": "メール送信元名"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > form > div > div > div > label"
                ],
                "replace": "Mail From",
                "translate": "メール送信元アドレス"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > form > div > div > div > div > p"
                ],
                "replace": "Enter an email address that all outgoing emails will originate from.",
                "translate": "メールの発信元となるメールアドレスを入力します。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > form > div > div > div > div > p"
                ],
                "replace": "The name that emails should appear to come from.",
                "translate": "メールの送信元の名前です。"
            },
            {
                "properties": [],
                "selectors": [
                    "#testButton"
                ],
                "replace": "Test",
                "translate": "テスト"
            },
            {
                "properties": [],
                "selectors": [
                    "#saveButton"
                ],
                "replace": "Save",
                "translate": "保存"
            },
        ]
    },
    {
        "name": "Admin > Settings > Advanced",
        "path": "^\/admin\/settings\/advanced$",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > h1",
                    "body > div > div > section > div > div > div > div > h3"
                ],
                "replace": "Advanced Settings",
                "translate": "高度な設定"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > h1 > small"
                ],
                "replace": "Configure advanced settings for Pterodactyl.",
                "translate": "Pterodactylの詳細設定を構成します。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > form > div > div > div > div > label"
                ],
                "replace": "Status",
                "translate": "ステータス"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > form > div > div > div > div > div > select"
                ],
                "replace": "Enabled",
                "translate": "有効"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > form > div > div > div > div > div > select"
                ],
                "replace": "Disabled",
                "translate": "無効"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > form > div > div > div > div > div > p"
                ],
                "replace": "If enabled, login forms and password reset forms will do a silent captcha check and display a visible captcha if needed.",
                "translate": "有効にすると、ログインフォームとパスワードリセットフォームがサイレントキャプチャチェックを実行し、必要に応じて表示されたキャプチャを表示します。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > form > div > div > div > div > label"
                ],
                "replace": "Site Key",
                "translate": "サイトキー"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > form > div > div > div > div > label"
                ],
                "replace": "Secret Key",
                "translate": "シークレットキー"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > form > div > div > div > div > div > p"
                ],
                "replace": "Used for communication between your site and Google. Be sure to keep it a secret.",
                "translate": "PterodactylとGoogle間の通信に使用されます。必ず秘密にしてください。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > form > div > div > div > div > div"
                ],
                "replace": "You are currently using reCAPTCHA keys that were shipped with this Panel. For improved security it is recommended to ",
                "translate": "現在、このパネルに付属のreCAPTCHAキーを使用しています。セキュリティを向上させるために、"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > form > div > div > div > div > div > a"
                ],
                "replace": "generate new invisible reCAPTCHA keys",
                "translate": "ここ"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > form > div > div > div > div > div"
                ],
                "replace": "that tied specifically to your website.",
                "translate": "からキーを生成してください。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > form > div > div > h3"
                ],
                "replace": "HTTP Connections",
                "translate": "HTTP接続"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > form > div > div > div > div > label"
                ],
                "replace": "Connection Timeout",
                "translate": "接続タイムアウト"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > form > div > div > div > div > div > p"
                ],
                "replace": "The amount of time in seconds to wait for a connection to be opened before throwing an error.",
                "translate": "エラーをスローする前に接続を待機する時間(秒)。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > form > div > div > div > div > label"
                ],
                "replace": "Request Timeout",
                "translate": "リクエストタイムアウト"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > form > div > div > div > div > div > p"
                ],
                "replace": "The amount of time in seconds to wait for a request to be completed before throwing an error.",
                "translate": "エラーをスローする前にリクエストを待機する時間(秒)。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > form > div > div > h3"
                ],
                "replace": "Automatic Allocation Creation",
                "translate": "自動割り当ての作成"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > form > div > div > div > div > div > p"
                ],
                "replace": "If enabled users will have the option to automatically create new allocations for their server via the frontend.",
                "translate": "有効になっている場合、ユーザはフロントエンドを介してサーバの新しい割り当てを自動的に作成するオプションがあります。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > form > div > div > div > div > label"
                ],
                "replace": "Starting Port",
                "translate": "開始ポート"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > form > div > div > div > div > div > p"
                ],
                "replace": "The starting port in the range that can be automatically allocated.",
                "translate": "自動的に割り当てることができる範囲の開始ポートです。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > form > div > div > div > div > label"
                ],
                "replace": "Ending Port",
                "translate": "終了ポート"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > form > div > div > div > div > div > p"
                ],
                "replace": "The ending port in the range that can be automatically allocated.",
                "translate": "自動的に割り当てることができる範囲の開始ポートです。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > form > div > div > button"
                ],
                "equals": "Save",
                "replace": "Save",
                "translate": "保存"
            },
        ]
    },
    {
        "name": "Admin > API",
        "path": "^\/admin\/api(\/new)?$",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > h1",
                    "body > div > div > section > div > div > div > div > h3"
                ],
                "replace": "Application API",
                "translate": "API設定"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > h1 > small"
                ],
                "replace": "Control access credentials for managing this Panel via the API.",
                "translate": "APIを介してこのパネルを管理するためのアクセス資格情報を制御します。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > h1 > small"
                ],
                "replace": "Create a new application API key.",
                "translate": "新しくAPIキーを作成"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > h3"
                ],
                "replace": "Credentials List",
                "translate": "資格リスト"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > div > a"
                ],
                "replace": "Create New",
                "translate": "新しく作成"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > form > div > div > div > h3"
                ],
                "replace": "Select Permissions",
                "translate": "権限を設定"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > form > div > div > div > table > tbody > tr > td"
                ],
                "replace": "Allocations",
                "translate": "割り当て"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > form > div > div > div > table > tbody > tr > td"
                ],
                "replace": "Database Hosts",
                "translate": "データベースホスト"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > form > div > div > div > table > tbody > tr > td"
                ],
                "replace": "Eggs",
                "translate": "卵(Egg<font>s</font>)"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > form > div > div > div > table > tbody > tr > td"
                ],
                "replace": "Locations",
                "translate": "ロケーション"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > form > div > div > div > table > tbody > tr > td"
                ],
                "replace": "Nests",
                "translate": "ネスト"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > form > div > div > div > table > tbody > tr > td"
                ],
                "replace": "Nodes",
                "translate": "ノード"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > form > div > div > div > table > tbody > tr > td"
                ],
                "replace": "Server Databases",
                "translate": "割り当て"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > form > div > div > div > table > tbody > tr > td"
                ],
                "replace": "Servers",
                "translate": "サーバ"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > form > div > div > div > table > tbody > tr > td"
                ],
                "replace": "Users",
                "translate": "ユーザ"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > form > div > div > div > table > tbody > tr > td > label"
                ],
                "replace": "Write",
                "translate": "書き込み"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > form > div > div > div > table > tbody > tr > td > label"
                ],
                "replace": "Read",
                "translate": "読み込み"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > form > div > div > div > table > tbody > tr > td > label"
                ],
                "replace": "None",
                "translate": "なし"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > form > div > div > div > div > label"
                ],
                "replace": "Description",
                "translate": "概要"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > form > div > div > div > p"
                ],
                "replace": "Once you have assigned permissions and created this set of credentials you will be unable to come back and edit it. If you need to make changes down the road you will need to create a new set of credentials.",
                "translate": "権限を割り当ててこの資格情報のセットを作成すると、戻って編集することはできなくなります。将来的に変更を加える必要がある場合は、新しい資格情報のセットを作成する必要があります。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > form > div > div > div > button"
                ],
                "replace": "Create Credentials",
                "translate": "資格情報を作成"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div"
                ],
                "replace": "There was an error validating the data provided.",
                "translate": "提供されたデータの検証中にエラーが発生しました。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div"
                ],
                "replace": "The Description field is required.",
                "translate": "説明は必須です。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div"
                ],
                "replace": "A new application API key has been generated for your account.",
                "translate": "アカウント用に新しいアプリケーションAPIキーが生成されました。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > table > tbody > tr > th"
                ],
                "replace": "Key",
                "translate": "キー"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > table > tbody > tr > th"
                ],
                "replace": "Memo",
                "translate": "メモ"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > table > tbody > tr > th"
                ],
                "replace": "Last Used",
                "translate": "最終使用"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > table > tbody > tr > th"
                ],
                "replace": "Created",
                "translate": "作成日"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > h2"
                ],
                "replace": "Revoke API Key",
                "translate": "APIキーを取り消す"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > p"
                ],
                "replace": "Once this API key is revoked any applications currently using it will stop working.",
                "translate": "このAPIキーが取り消されると、現在それを使用しているアプリケーションは機能しなくなります。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > button"
                ],
                "replace": "Cancel",
                "translate": "キャンセル"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > div > button"
                ],
                "replace": "Revoke",
                "translate": "取り消す"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > p"
                ],
                "replace": "API Key has been revoked.",
                "translate": "APIキーは正常に取り消されました。"
            },
        ]
    },
    {
        "name": "Admin > Databases",
        "path": "^\/admin\/databases$",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > h1"
                ],
                "replace": "Database Hosts",
                "translate": "データベースホスト"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > h1 > small"
                ],
                "replace": "Database hosts that servers can have databases created on.",
                "translate": "サーバがデータベースを作成する際に使用されるデータベースホストです。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > h3"
                ],
                "replace": "Host List",
                "translate": "ホスト"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > div > button"
                ],
                "replace": "Create New",
                "translate": "新しく作成"
            },
            {
                "properties": [],
                "selectors": [
                    "#newHostModal > div > div > form > div > h4"
                ],
                "replace": "Create New Database Host",
                "translate": "データベースホストを作成"
            },
            {
                "properties": [],
                "selectors": [
                    "#newHostModal > div > div > form > div > div > p"
                ],
                "replace": "A short identifier used to distinguish this location from others. Must be between 1 and 60 characters, for example, ",
                "translate": "この場所を他の場所と区別するために使用される短い識別子です。1〜60文字である必要があります。例："
            },
            {
                "properties": [],
                "selectors": [
                    "#newHostModal > div > div > form > div > div > div > p"
                ],
                "replace": "The IP address or FQDN that should be used when attempting to connect to this MySQL host <em>from the panel</em> to add new databases.",
                "translate": "<em>パネル</em>からこのMySQLホストに接続して新しいデータベースを追加するときに使用する必要があるIPアドレスまたはFQDNです。"
            },
            {
                "properties": [],
                "selectors": [
                    "#newHostModal > div > div > form > div > div > div > p"
                ],
                "replace": "The port that MySQL is running on for this host.",
                "translate": "このホストでMySQLが実行されているポートです。"
            },
            {
                "properties": [],
                "selectors": [
                    "#newHostModal > div > div > form > div > div > div > p"
                ],
                "replace": "The username of an account that has enough permissions to create new users and databases on the system.",
                "translate": "システム上に新しいユーザとデータベースを作成するのに十分な権限を持つアカウントのユーザー名です。"
            },
            {
                "properties": [],
                "selectors": [
                    "#newHostModal > div > div > form > div > div > div > label"
                ],
                "replace": "Password",
                "translate": "パスワード"
            },
            {
                "properties": [],
                "selectors": [
                    "#newHostModal > div > div > form > div > div > div > p"
                ],
                "replace": "The password to the account defined.",
                "translate": "アカウントのパスワードです。"
            },
            {
                "properties": [],
                "selectors": [
                    "#newHostModal > div > div > form > div > div > label"
                ],
                "replace": "Linked Node",
                "translate": "リンクされたノード"
            },
            {
                "properties": [],
                "selectors": [
                    "#select2-pNodeId-container"
                ],
                "replace": "None",
                "translate": "なし"
            },
            {
                "properties": [],
                "selectors": [
                    "#newHostModal > div > div > form > div > div > p"
                ],
                "replace": "This setting does nothing other than default to this database host when adding a database to a server on the selected node.",
                "translate": "この設定は、選択したノード上のサーバにデータベースを追加するときに、このデータベースホストにデフォルトで適用される以外に何もしません。"
            },
            {
                "properties": [],
                "selectors": [
                    "#newHostModal > div > div > form > div > p"
                ],
                "replace": "The account defined for this database host <strong>must</strong> have the <code>WITH GRANT OPTION</code> permission. If the defined account does not have this permission requests to create databases <em>will</em> fail. <strong>Do not use the same account details for MySQL that you have defined for this panel.</strong>",
                "translate": "使用するアカウントには、<code>WITH GRANT OPTION</code>権限が<strong>必ず</strong>必要です。使用するアカウントにこの権限がないあ場合、データベースを作成する要求は失敗します。"
            },
            {
                "properties": [],
                "selectors": [
                    "#newHostModal > div > div > form > div > p > strong"
                ],
                "replace": "Do not use the same account details for MySQL that you have defined for this panel.",
                "translate": "このパネルに定義したものと同じMySQLのアカウント情報を使用しないでください。"
            },
            {
                "properties": [],
                "selectors": [
                    "#newHostModal > div > div > form > div > button"
                ],
                "replace": "Cancel",
                "translate": "キャンセル"
            },
            {
                "properties": [],
                "selectors": [
                    "#newHostModal > div > div > form > div > button"
                ],
                "replace": "Create",
                "translate": "作成"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > table > tbody > tr > th",
                    "#newHostModal > div > div > form > div > div > label"
                ],
                "replace": "Name",
                "translate": "名前"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > table > tbody > tr > th",
                    "#newHostModal > div > div > form > div > div > div > label"
                ],
                "replace": "Host",
                "translate": "ホスト"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > table > tbody > tr > th",
                    "#newHostModal > div > div > form > div > div > div > label"
                ],
                "replace": "Port",
                "translate": "ポート"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > table > tbody > tr > th",
                    "#newHostModal > div > div > form > div > div > div > label"
                ],
                "replace": "Username",
                "translate": "ユーザ名"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > table > tbody > tr > th"
                ],
                "replace": "Databases",
                "translate": "データベース"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > table > tbody > tr > th"
                ],
                "replace": "Node",
                "translate": "ノード"
            },
        ]
    },
    {
        "name": "Admin > Locations",
        "path": "^\/admin\/locations$",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > h1"
                ],
                "replace": "Locations",
                "translate": "場所"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > h1 > small"
                ],
                "replace": "All locations that nodes can be assigned to for easier categorization.",
                "translate": "ノードを割り当てることができる場所です。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > h3"
                ],
                "replace": "Location List",
                "translate": "場所"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > div > button"
                ],
                "replace": "Create New",
                "translate": "新しく作成"
            },
            {
                "properties": [],
                "selectors": [
                    "#newLocationModal > div > div > form > div > h4"
                ],
                "replace": "Create Location",
                "translate": "新しく作成"
            },
            {
                "properties": [],
                "selectors": [
                    "#newLocationModal > div > div > form > div > div > div > p"
                ],
                "replace": "A short identifier used to distinguish this location from others. Must be between 1 and 60 characters, for example, ",
                "translate": "この場所を他の場所と区別するために使用する短い識別子です。1〜60文字である必要があります。例："
            },
            {
                "properties": [],
                "selectors": [
                    "#newLocationModal > div > div > form > div > div > div > p"
                ],
                "replace": "A longer description of this location. Must be less than 191 characters.",
                "translate": "この場所の詳細な説明です。 191文字未満である必要があります。"
            },
            {
                "properties": [],
                "selectors": [
                    "#newLocationModal > div > div > form > div > button"
                ],
                "replace": "Cancel",
                "translate": "キャンセル"
            },
            {
                "properties": [],
                "selectors": [
                    "#newLocationModal > div > div > form > div > button"
                ],
                "replace": "Create",
                "translate": "作成"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > table > tbody > tr > th",
                    "#newLocationModal > div > div > form > div > div > div > label"
                ],
                "replace": "Short Code",
                "translate": "短縮コ－ド"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > table > tbody > tr > th",
                    "#newLocationModal > div > div > form > div > div > div > label"
                ],
                "replace": "Description",
                "translate": "概要"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > table > tbody > tr > th"
                ],
                "replace": "Nodes",
                "translate": "ノード"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > table > tbody > tr > th"
                ],
                "replace": "Servers",
                "translate": "サーバ"
            },
        ]
    },
    {
        "name": "Admin > Locations > View",
        "path": "^\/admin\/locations\/view\/[0-9]+$",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > h3"
                ],
                "replace": "Location Details",
                "translate": "場所情報"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > form > div > div > label"
                ],
                "replace": "Short Code",
                "translate": "短縮コード"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > form > div > div > label"
                ],
                "replace": "Description",
                "translate": "概要"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > form > div > button"
                ],
                "replace": "Save",
                "translate": "保存"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > h3"
                ],
                "replace": "Nodes",
                "translate": "ノード"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > table > tbody > tr > th"
                ],
                "replace": "Name",
                "translate": "名前"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > table > tbody > tr > th"
                ],
                "replace": "Servers",
                "translate": "サーバ数"
            },
        ]
    },
    {
        "name": "Admin > Node",
        "path": "^\/admin\/nodes(\\?filter.*)?$",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > h1"
                ],
                "replace": "Nodes",
                "translate": "ノード"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > h1 > small"
                ],
                "replace": "All nodes available on the system.",
                "translate": "システムで使用可能なすべてのノードです。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > h3"
                ],
                "replace": "Node List",
                "translate": "ノード"
            },
            {
                "properties": [
                    "placeholder"
                ],
                "selectors": [
                    "body > div > div > section > div > div > div > div > div > form > div > input"
                ],
                "replace": "Search Node",
                "translate": "ノードを検索"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > table > tbody > tr > th"
                ],
                "replace": "Name",
                "translate": "名前"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > table > tbody > tr > th"
                ],
                "replace": "Location",
                "translate": "場所"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > table > tbody > tr > th"
                ],
                "replace": "Memory",
                "translate": "メモリ"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > table > tbody > tr > th"
                ],
                "replace": "Disk",
                "translate": "ディスク"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > table > tbody > tr > th"
                ],
                "replace": "Servers",
                "translate": "サーバ数"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > table > tbody > tr > th"
                ],
                "replace": "Public",
                "translate": "公開"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > div > form > div > div > a > button"
                ],
                "replace": "Create New",
                "translate": "新しく作成"
            },
        ]
    },
    {
        "name": "Admin > Node > New",
        "path": "^\/admin\/nodes\/new$",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > h1"
                ],
                "replace": "New Node",
                "translate": "新しいノード"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > h1 > small"
                ],
                "replace": "Create a new local or remote node for servers to be installed to.",
                "translate": "インストール先のサーバ用に新しいローカルノードまたはリモートノードを作成します。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > h3"
                ],
                "replace": "Basic Details",
                "translate": "基本"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > label"
                ],
                "replace": "Name",
                "translate": "名前"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > p"
                ],
                "replace": "Character limits: <code>a-zA-Z0-9_.-</code> and <code>[Space]</code> (min 1, max 100 characters).",
                "translate": "使用可能な文字は<code>a-zA-Z0-9_.-</code>と空白文字で、100文字以内である必要があります。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > label"
                ],
                "replace": "Description",
                "translate": "概要"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > label"
                ],
                "replace": "Location",
                "translate": "場所"
            },
            {
                "properties": [],
                "selectors": [
                    "#select2-pLocationId-results > li"
                ],
                "replace": "No results found",
                "translate": "場所が見つかりませんでした"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > label"
                ],
                "replace": "Node Visibility",
                "translate": "ノードの可視性"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > div > div > label"
                ],
                "replace": "Public",
                "translate": "公開"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > div > div > label"
                ],
                "replace": "Private",
                "translate": "非公開"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section.content > form > div > div:nth-child(1) > div > div.box-body > div:nth-child(4) > p"
                ],
                "replace": "By setting a node to <code>private</code> you will be denying the ability to auto-deploy to this node.",
                "translate": "<code>非公開</code>に設定した場合、ノードに自動でデプロイする機能を利用できません。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > p"
                ],
                "replace": "Please enter domain name (e.g <code>node.example.com</code>) to be used for connecting to the daemon. An IP address may be used <em>only</em> if you are not using SSL for this node.",
                "translate": "ドメイン名を入力してください(例：<code>node.example.com</code>)。IPアドレスは、このノードにSSLを使用していない場合にのみ使用できます。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > label"
                ],
                "replace": "Communicate Over SSL",
                "translate": "SSLの使用"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > div > div > label"
                ],
                "replace": "Use SSL Connection",
                "translate": "SSL接続を使用"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > div > div > label"
                ],
                "replace": "Use HTTP Connection",
                "translate": "HTTP接続を使用"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > p"
                ],
                "replace": "Your Panel is currently configured to use a secure connection. In order for browsers to connect to your node it <strong>must</strong> use a SSL connection.",
                "translate": "パネルは現在、安全な接続を使用するように構成されています。ブラウザがノードに接続するには、SSL接続を使用する必要があります。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > label"
                ],
                "replace": "Behind Proxy",
                "translate": "中間プロキシ(<font>Behind</font> Proxy)"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > div > div > label"
                ],
                "replace": "Not Behind Proxy",
                "translate": "使用していない"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > div > div > label"
                ],
                "replace": "Behind Proxy",
                "translate": "使用している"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > p"
                ],
                "replace": "If you are running the daemon behind a proxy such as Cloudflare, select this to have the daemon skip looking for certificates on boot.",
                "translate": "Cloudflareなどのプロキシの背後でデーモンを実行している場合は、これを選択して、デーモンが起動時に証明書の検索をスキップするようにします。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > h3"
                ],
                "replace": "Configuration",
                "translate": "設定"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > div > label"
                ],
                "replace": "Daemon Server File Directory",
                "translate": "デーモンサーバファイルディレクトリ"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > div > p"
                ],
                "replace": "Enter the directory where server files should be stored. <strong>If you use OVH you should check your partition scheme. You may need to use <code>/home/daemon-data</code> to have enough space.</strong>",
                "translate": "サーバファイルを保存するディレクトリを指定します。<strong>OVHを使用している場合はパーティションスキームを確認する必要があります。十分なスペースを確保するには、<code>/home/daemon-data</code>を指定してください。</strong>"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > div > label"
                ],
                "replace": "Total Memory",
                "translate": "トータルメモリ"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > div > label"
                ],
                "replace": "Memory Over-Allocation",
                "translate": "メモリの過剰割り当て"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > div > p"
                ],
                "replace": "Enter the total amount of memory available for new servers. If you would like to allow overallocation of memory enter the percentage that you want to allow. To disable checking for overallocation enter <code>-1</code> into the field. Entering <code>0</code> will prevent creating new servers if it would put the node over the limit.",
                "translate": "新しいサーバで使用可能なメモリの合計量を入力します。メモリの過剰割り当てを許可する場合は、許可するパーセンテージを入力します。割り当て超過のチェックを無効にするには、フィールドに<code>-1</code>と入力します。<code>0</code>を入力すると、ノードが制限を超えた場合に新しいサーバを作成できなくなります。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > div > label"
                ],
                "replace": "Total Disk Space",
                "translate": "最大ディスクサイズ"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > div > label"
                ],
                "replace": "Disk Over-Allocation",
                "translate": "ディスクの過剰割り当て"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > div > p"
                ],
                "replace": "Enter the total amount of disk space available for new servers. If you would like to allow overallocation of disk space enter the percentage that you want to allow. To disable checking for overallocation enter <code>-1</code> into the field. Entering <code>0</code> will prevent creating new servers if it would put the node over the limit.",
                "translate": "新しいサーバで使用可能なディスクの合計量を入力します。ディスクの過剰割り当てを許可する場合は、許可するパーセンテージを入力します。割り当て超過のチェックを無効にするには、フィールドに<code>-1</code>と入力します。<code>0</code>を入力すると、ノードが制限を超えた場合に新しいサーバを作成できなくなります。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > div > label"
                ],
                "replace": "Daemon Port",
                "translate": "デーモンポート"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > div > label"
                ],
                "replace": "Daemon SFTP Port",
                "translate": "デーモンSFTPポート"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > div > p"
                ],
                "replace": "The daemon runs its own SFTP management container and does not use the SSHd process on the main physical server. ",
                "translate": "デーモンは独自のSFTP管理コンテナを実行し、メインの物理サーバでSSHdプロセスを使用しません。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > div > p > strong"
                ],
                "replace": "Do not use the same port that you have assigned for your physical server's SSH process.",
                "translate": "物理サーバのSSHプロセスに割り当てたものと同じポートを使用しないでください。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > div > p"
                ],
                "replace": "If you will be running the daemon behind CloudFlare® you should set the daemon port to <code>8443</code> to allow websocket proxying over SSL.",
                "translate": "CloudFlare®の背後でデーモンを実行する場合は、デーモンポートを<code>8443</code>に設定して、SSLを介したWebSocketプロキシを許可する必要があります。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > button"
                ],
                "replace": "Create Node",
                "translate": "ノードを作成"
            },
        ]
    },
    {
        "name": "Admin > Node > View > Header",
        "path": "^\/admin\/nodes\/view\/\\d+",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "title",
                    "body > div > div > section > div > div > div > ul > li > a"
                ],
                "replace": "About",
                "translate": "概要"
            },
            {
                "properties": [],
                "selectors": [
                    "title",
                    "body > div > div > section > div > div > div > ul > li > a"
                ],
                "replace": "Settings",
                "translate": "設定"
            },
            {
                "properties": [],
                "selectors": [
                    "title",
                    "body > div > div > section > div > div > div > ul > li > a"
                ],
                "replace": "Configuration",
                "translate": "構成"
            },
            {
                "properties": [],
                "selectors": [
                    "title",
                    "body > div > div > section > div > div > div > ul > li > a"
                ],
                "replace": "Allocation",
                "translate": "割り当て"
            },
            {
                "properties": [],
                "selectors": [
                    "title",
                    "body > div > div > section > div > div > div > ul > li > a"
                ],
                "replace": "Servers",
                "translate": "サーバ"
            },
        ]
    },
    {
        "name": "Admin > Node > View",
        "path": "^\/admin\/nodes\/view\/\\d+$",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > h1 > small"
                ],
                "replace": "A quick overview of your node.",
                "translate": "ノードの要約ビューです。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > div > div > h3"
                ],
                "replace": "Information",
                "translate": "情報"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > div > div > table > tbody > tr > td"
                ],
                "replace": "Daemon Version",
                "translate": "デーモンバージョン"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > div > div > table > tbody > tr > td"
                ],
                "replace": "System Information",
                "translate": "システム情報"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > div > div > table > tbody > tr > td"
                ],
                "replace": "Total CPU Threads",
                "translate": "CPUスレッド数"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > div > div"
                ],
                "replace": "Description",
                "translate": "概要"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > div > div > h3"
                ],
                "replace": "Delete Node",
                "translate": "ノードを削除"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > div > div > p"
                ],
                "replace": "Deleting a node is a irreversible action and will immediately remove this node from the panel. There must be no servers associated with this node in order to continue.",
                "translate": "ノードの削除は元に戻せないアクションであり、このノードをパネルからすぐに削除します。 続行するには、このノードにサーバーが関連付けられていない必要があります。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > div > div > form > button"
                ],
                "replace": "Yes, Delete This Node",
                "translate": "このノードを削除する"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > h3"
                ],
                "replace": "At-a-Glance",
                "translate": "要約"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > div > div > div > div > span"
                ],
                "replace": "Disk Space Allocated",
                "translate": "割り当て済みディスク"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > div > div > div > div > span"
                ],
                "replace": "Memory Allocated",
                "translate": "割り当て済みメモリ"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > div > div > div > div > div > div > div > div > span"
                ],
                "replace": "Total Servers",
                "translate": "サーバ数"
            },
        ]
    },
    {
        "name": "Admin > Node > View > Settings",
        "path": "^\/admin\/nodes\/view\/\\d+\/settings$",
        "rules": [
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > h1 > small"
                ],
                "replace": "Configure your node settings.",
                "translate": "あなたのノード設定を構成。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > h3"
                ],
                "replace": "Settings",
                "translate": "設定"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > label"
                ],
                "replace": "Node Name",
                "translate": "ノード名"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > div > p > small"
                ],
                "replace": "Character limits: <code>a-zA-Z0-9_.-</code> and <code>[Space]</code> (min 1, max 100 characters).",
                "translate": "使用可能な文字は<code>a-zA-Z0-9_.-</code>と空白文字で、100文字以内である必要があります。"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > label"
                ],
                "replace": "Description",
                "translate": "説明"
            },
            {
                "properties": [],
                "selectors": [
                    "body > div > div > section > form > div > div > div > div > div > label"
                ],
                "replace": "Location",
                "translate": "場所"
            },
            {
                "properties": [],
                "selectors": [
                    "#select2-location_id-ai-results > li"
                ],
                "replace": "No results found",
                "translate": "場所が見つかりませんでした"
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
            var equals = obj.equals == undefined || obj.equals == null ? rules.equals: obj.equals;
            var doms;
            if (!override && rules.selector != undefined && rules.selector != null)
                doms = [document.querySelectorAll(rules.selector)];
            else if (!override && rules.selectors != undefined && rules.selectors != null)
                doms = rules.selectors.map(s => document.querySelectorAll(s));
            else
                doms = obj.selectors.map(s => document.querySelectorAll(s));

            for (var i = 0; i < doms.length; i++)
            {
                var domc = doms[i]
                domc.forEach((dom) => {
                    if (domr != undefined && domr != null && dom != null && !dom == domr)
                        return;
                    props.forEach((prop) => {
                        tr(dom, translate, prop, obj["replace"], format, contains, append, ignoreCase, add, equals);
                    });
                    if (props.length == 0 && format != undefined)
                        tr(dom, translate, null, obj["replace"], format, contains, append, ignoreCase, add, equals);
                    else if (props.length == 0 && obj["replace"] == undefined)
                         tr(dom, translate, null, null, format, contains, append, ignoreCase, add)
                    else if (obj["replace"] != undefined)
                        tr(dom, translate, null, obj["replace"], format, contains, append, ignoreCase, add, equals);
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

document.equ = (str, b) => {
    return equ(str,b);
};


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

function equ (str, equ) {
    var a = false;
    if (equ == undefined || equ == null)
        return true;
    return str.toUpperCase() === equ.toUpperCase();
}

function lower(str, ignoreCase)
{
    return ignoreCase ? str.ignoreCase(): str;
}

function tr(dom, translate, prop, replace, format, contains, append, ignoreCase, add, equals) {
    if (dom == undefined || dom == null)
        return;

    if (contains == null || (contains && !prop && cca(dom.innerHTML, contains, ignoreCase)) || (contains && prop && dom[prop] && cca(dom[prop], contains, ignoreCase) && equ(dom[prop], equals)))
        if (add && add.length != 0)
            add.forEach(s => dom.classList.add(s))

    if (translate != undefined)
    {
        if (prop != null)
        {
            if (contains != undefined && contains != null && dom[prop] != null && dom[prop] != undefined && !cca(dom[prop], contains, ignoreCase) && !equ(dom[prop], equals))
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
            if (contains != undefined && contains != null && !cca(dom.innerHTML, contains, ignoreCase) || !equ(dom.innerHTML, equals))
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
            if (contains != undefined && contains != null && dom[prop] != null && dom[prop] != undefined && cca(dom[prop], contains, ignoreCase) && equ(dom[prop], equals))
            {
                var propaw = format.format(document.querySelector(replace).outerHTML) + (append != undefined && append != null ? append: "");
                if (dom[prop] != propaw)
                    dom[prop] = propaw;
            }
    }
    else
        if (document.querySelector(replace) != null)
              if (contains != undefined && contains != null && cca(dom.innerHTML, contains, ignoreCase) && equ(dom.innerHTML, equals))
              {
                  var inn =  format.format(document.querySelector(replace).outerHTML) + (append != undefined && append != null ? append: "");
                  if (inn != dom.outerHTML)
                      dom.outerHTML = inn;
              }
}


