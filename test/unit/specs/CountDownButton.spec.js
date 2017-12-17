import CountDownButton from '../../../src/components/CountDownButton.vue'
import Vue from 'vue'
// 挂载元素并返回已渲染的文本的工具函数
var id = 0;
const createElm = function () {
  const elm = document.createElement('div');

  elm.id = 'app' + ++id;
  document.body.appendChild(elm);

  return elm;
};

function createVm(Component, propsData, mounted = false) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({propsData}).$mount(
    mounted === false ? null : createElm()
  )
  return vm
}

describe('CountDownButton.vue', () => {
  let vm;
  afterEach(()=> {
    vm && vm.$destroy()
  });

  it('create', () => {
    vm = createVm(CountDownButton, {
      textNormal: '发送验证码啦',
      enable: true,
    });
    expect(vm.$el).to.property('textContent').to.include('发送验证码啦');

  });

  it('bind ClassName', ()=> {
    vm = createVm(CountDownButton, {
      textNormal: '发送验证码啦',
      enable: true,
      enableClassName: 'useful'
    });
    expect(Object.values(vm.$el.classList)).to.contain('useful')
  });

  it('click ', done=> {
    vm = createVm(CountDownButton, {
      textNormal: '发验证码',
      textWaiting: '等{s}秒后再发吧',
      enable: true,
      second: 30,
      disableClassName: 'notAllow'
    }, true);
    vm.$el.click();
    vm.$nextTick(()=> {
      expect(Object.values(vm.$el.classList)).to.contain('notAllow')
      expect(vm.$el.textContent).to.match(/^等2[89]秒后再发吧$/g)
      done()
    })
  })

  it('click end ', function (done) {
    this.timeout(4200);
    vm = createVm(CountDownButton, {
      textNormal: '大王叫我来巡山',
      textWaiting: '等{s}秒后再发吧',
      enable: true,
      second: 4
    }, true);
    vm.$el.click();
    setTimeout(function(){
      vm.$el.click();
      expect(vm.$el.textContent).to.match(/^等[23]秒后再发吧$/g)
    },1000)
    setTimeout(function () {
      expect(vm.$el).to.property('textContent').to.include('大王叫我来巡山');
      done()
    }, 4100)
  })

  it('before destroy reset called', function () {
    vm = createVm(CountDownButton, {
      textNormal: '大王叫我来巡山',
      second: 'fds'
    }, true);
    expect(vm.$mount).to.throw()
  })

})
