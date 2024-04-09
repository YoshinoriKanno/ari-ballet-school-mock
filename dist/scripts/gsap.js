document.addEventListener("DOMContentLoaded", (event) => {

  // GSAPライブラリを使用して".box"クラスを持つ要素に対してアニメーションを定義します。
  gsap.to(".box", {
    // ScrollTriggerを設定して、スクロール位置に基づいたトリガーを定義します。
    scrollTrigger: {
      trigger: ".box", // アニメーションのトリガーとなる要素を指定します（この場合は".box"クラスを持つ要素）。
      start: "top center", // ビューポートの上部中央が".box"の上部に達した時にアニメーションを開始します。
      end: "bottom center", // ビューポートの下部中央が".box"の下部に達した時にアニメーションを終了します。
      scrub: 1, // スクロール動作に連動してアニメーションが進行・逆行するようにします。この値はアニメーションがどれくらい"粘着"するかを表します。
      markers: true, // 開発目的でスクロールトリガーの開始点と終了点をビジュアルマーカーとして表示します。
    },
    x: 300, // 水平方向へ300ピクセル移動させます。
    // rotation: 360, // 360度回転させます。
    // duration: 2, // アニメーションの持続時間を2秒間に設定します。
  });

  gsap.from(".gsap-kv", { x: 300, duration: 2 });

  // GSAPライブラリを使用して".box"クラスを持つ要素に対してアニメーションを定義します。
  gsap.from(".gsap-heading", {
    // ScrollTriggerを設定して、スクロール位置に基づいたトリガーを定義します。
    scrollTrigger: {
      trigger: ".gsap-section", // アニメーションのトリガーとなる要素を指定します（この場合は".box"クラスを持つ要素）。
      start: "top center", // ビューポートの上部中央が".gsap-section"の上部に達した時にアニメーションを開始します。
      end: "bottom center", // ビューポートの下部中央が".gsap-section"の下部に達した時にアニメーションを終了します。
      scrub: 1, // スクロール動作に連動してアニメーションが進行・逆行するようにします。この値はアニメーションがどれくらい"粘着"するかを表します。
      markers: true, // 開発目的でスクロールトリガーの開始点と終了点をビジュアルマーカーとして表示します。
    },
    x: 300, // 水平方向へ300ピクセル移動させます。
    rotation: 360, // 360度回転させます。
    duration: 2, // アニメーションの持続時間を2秒間に設定します。
    opacity: 0, // 透明度を0に設定します。
  });

  gsap.timeline({
    // ScrollTriggerを設定して、スクロール位置に基づいたトリガーを定義します。
    scrollTrigger: {
      trigger: ".gsap-section", // アニメーションのトリガーとなる要素を指定します。
      start: "top center", // ビューポートの上部中央が".gsap-section"の上部に達した時にアニメーションを開始します。
      end: "bottom center", // ビューポートの下部中央が".gsap-section"の下部に達した時にアニメーションを終了します。
      scrub: 1, // スクロール動作に連動してアニメーションが進行・逆行するようにします。
      markers: true, // 開発目的でスクロールトリガーの開始点と終了点をビジュアルマーカーとして表示します。
    }
  })
    // 最初の要素のアニメーションを追加します。
    .from(".gsap-lead-1", { x: 300, opacity: 0, duration: 2 })
    // .5秒遅れで次の要素のアニメーションを追加します。
    .from(".gsap-lead-2", { x: 300, opacity: 0, duration: 2 }, "-=1.5")
    // さらに.5秒遅れで次の要素のアニメーションを追加します。
    .from(".gsap-lead-3", { x: 300, opacity: 0, duration: 2 }, "-=1.5");


});
