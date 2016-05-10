# スーパーイカメーカー
## なにこれ
- 某イカ風のキャラを着せ替えして遊ぶサービス
- お気に入りの組み合わせを作って自慢
- 作ったやつはアイコンにもできる
- [@jenga_ink](https://twitter.com/jenga_ink)神の描いたイカを見てニヤニヤ

## 動作環境
- モダンなモバイル全般
- アプリ内のWebViewでも
- PCでは見れればおｋ
- たぶんAndroidでも

## 機能
- 着せ替え -> 画像保存
- Twitterにシェア

## カスタマイズできるもの
- 性別
- 髪
- 肌
- 目
- 眉
- 口
- アタマ(オプション)
- フク
- 背景
- テキスト(オプション)

## Tech
- ES2015
- React x flumpt
- postcss

## 更新手順
- 画像を追加(`.DS_Store`など入ったら消す)
- `node sh/make-parts_data.js`
- `npm run build-js`
