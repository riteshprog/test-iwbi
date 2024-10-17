export default () => {
  ;(function () {
    const s = document.createElement('script')
    const h = document.querySelector('head') || document.body
    s.src = 'https://acsbapp.com/apps/app/dist/js/app.js'
    s.async = true
    s.onload = function () {
      // eslint-disable-next-line
      acsbJS.init({
        statementLink: '',
        footerHtml: '',
        hideMobile: false,
        hideTrigger: false,
        disableBgProcess: false,
        language: 'en',
        position: 'right',
        leadColor: '#146FF8',
        triggerColor: '#146FF8',
        triggerRadius: '50%',
        triggerPositionX: 'right',
        triggerPositionY: 'bottom',
        triggerIcon: 'people',
        triggerSize: 'bottom',
        triggerOffsetX: 20,
        triggerOffsetY: 20,
        mobile: {
          triggerSize: 'small',
          triggerPositionX: 'right',
          triggerPositionY: 'bottom',
          triggerOffsetX: 10,
          triggerOffsetY: 10,
          triggerRadius: '20',
        },
      })
    }
    h.appendChild(s)
  })()
}
