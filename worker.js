// 第1段階: いまのサイトをそのまま配信するだけの最小のプログラム。
// 次の段階で、ここにアクセスコードの確認・投稿の保存・配列データの配信を追加します。
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // html_handling: "none" では "/" が 404 になるため、トップは index.html を直接配信する
    if (url.pathname === "/") {
      url.pathname = "/index.html";
      return env.ASSETS.fetch(url.toString());
    }
    return env.ASSETS.fetch(request);
  }
};
