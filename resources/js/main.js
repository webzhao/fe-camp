{
  'use strict';

  init();

  /**
   * 开始
   */
  function init() {
    const slideName = getUrlParam('slide');
    getSlideContent(slideName).then(content => new Diapo({content, el: 'main'}));
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
    const matched = (new RegExp(`${param}=([\\w-]+)`)).exec(location.href);
    return matched ? matched[1] : '';
  };
}
