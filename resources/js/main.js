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
        var container = document.createElement('div');
        var frame = document.createElement('iframe');
        var closeBtn = document.createElement('div');
        var close = e => container.style.display = 'none';

        container.style.cssText = 'display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:#fff'
        frame.style.cssText = 'border:none;width:100%;height:90%';
        closeBtn.style.cssText = 'position:fixed;top:0.5em;right:0.5em;cursor:pointer;font-size:2em;color:rgba(50,50,50,0.5)';

        frame.src = 'about:blank';
        closeBtn.innerHTML = '&times;';

        container.appendChild(frame);
        container.appendChild(closeBtn);
        document.body.appendChild(container);

        closeBtn.onclick = close;
        window.addEventListener('keyup', function(e) {
          if (e.key == 'Escape') return close();
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
          container.style.display = 'block';
          var doc = frame.contentWindow.document;
          doc.open();
          doc.write(html);
          doc.body.style.zoom = 1.5;
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
