{
  'use strict';

  const slideName = getUrlParam('slide');

  init();

  /**
   * 开始
   */
  function init() {
    plugin();
    getSlideContent(slideName).then(content => new Diapo({content, el: 'main'}));
  }

  /**
   * image plugin
   * 图片相对md文件路径
   */
  function plugin() {
    const isRelative = url => !/^(https?:\/\/|\/)/i.test(url);
    Diapo.addPlugin('relative-image', {
      afterRender: function afterRender(diapo) {
        const images = diapo.container.querySelectorAll('img');
        Array.from(images).filter(img => isRelative(img.getAttribute('src'))).forEach(img => {
          img.src = '/slides/' + slideName.replace(/[^\/]+$/, '') + img.getAttribute('src');
        })
      }
    });
    Diapo.addPlugin('preview', {
      afterRender: function(diapo) {
        window.addEventListener('keyup', function(e) {
          if (e.key != 'p' || !e.ctrlKey) return;
          const slide = diapo.slides[diapo.current];
          const code = slide.querySelector('pre code');
          if (!code) return;
          let html = code.textContent;
          if (!/<html>/i.test(html)) {
            html = `<!doctype html>
              <html>
                <head>
                  <meta charset="UTF-8">
                  <title>Demo</title>
                </head>
                <body>
                  ${html}
                </body>
              </html>
            `;
          }
          const w = window.open('about:blank');
          w.document.write(html)
        })
      }
    });

    Diapo.addPlugin('editable', {
      afterRender: function(diapo) {
        window.addEventListener('keyup', function(e) {
          if (e.key != 'e' || !e.ctrlKey) return;
          const editable = document.body.contentEditable == 'true';
          document.body.contentEditable = !editable;
          diapo.enableKeyNav = editable;
        });
      }
    })
  }


  /**
   * 获取 slide 的 markdown 原文
   * 返回的是一个 Promise
   */
  function getSlideContent(slideName) {
    const url = `/slides/${slideName}.md`;
    return fetch(url).then(response => response.text());
  }

  /**
   * 从 url 中获取参数
   */
  function getUrlParam(param) {
    const matched = (new RegExp(`${param}=([\\w-/]+)`)).exec(location.href);
    return matched ? matched[1] : '';
  };
}
