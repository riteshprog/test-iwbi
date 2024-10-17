export default ({ app }, inject) => {
  inject('wind', {
    icons: {
      base: {
        neutral: 'focus:outline-none',
        blank: 'focus:outline-none mx-1 w-5 h-5 my-auto',
        primary: 'focus:outline-none text-primary-600 mx-1 w-5 h-5 my-auto',
        gray: 'focus:outline-none text-white mx-1 w-4 h-4 my-auto',
        danger:
          'focus:outline-none text-secondary-800 hover:text-secondary-900 transition duration-150 mx-1 w-5 h-5 my-auto',
        secondary: 'focus:outline-none text-secondary-600 mx-1 w-5 h-5 my-auto',
      },
    },
    links: {
      base: {
        secondary:
          'flex active:text-secondary-700 font-medium text-secondary-600 hover:text-secondary-800 transition duration-150 ease-in-out h-full ho',
        navPrimary: 'flex text-primary-700 select-none focus:outline-none',
        warning:
          'flex active:text-yellow-700 font-medium text-yellow-600 hover:text-yellow-800 transition duration-150 ease-in-out h-full',
        primary:
          'flex active:text-blue-500 font-medium text-blue-500 hover:text-blue-1100 transition duration-150 ease-in-out h-full',
        danger:
          'flex active:text-danger-500 font-medium text-danger-500 hover:text-danger-600 transition duration-150 ease-in-out h-full',
        white:
          'flex active:text-white tracking-tighter text-white hover:text-white transition duration-150 ease-in-out h-full',
        subLink: 'text-sm text-primary-900',
        subPartEditLink:
          'active:text-blue-500 bg-blue-1600 duration-150 ease-in-out font-normal h-full hover:bg-blue-1600 inline-flex px-2 py-1 text-sm text-white transition',
      },
    },
    buttons: {
      base: {
        blank: 'focus:outline-none',
        tooltip: 'text-primary-600 hover:text-primary-800 focus:outline-none',
        pill: 'flex text-sm px-5 py-1 rounded-full border focus:outline-none',
        pillOption:
          'border rounded-lg py-2 px-4 text-center text-sm cursor-pointer hover:bg-primary-700 hover:text-white focus:outline-none',
        tab: 'transparent border border-gray-400 flex focus:outline-none font-medium leading-5 px-7 py-3 rounded shadow text-center text-gray-1200 text-sm uppercase',
        tabSelected:
          'bg-white border border-gray-1300 flex focus:outline-none font-medium leading-5 px-7 py-3 rounded shadow text-center text-gray-1200 text-sm uppercase',
        blockTab:
          'bg-gray-1700 capitalize flex focus:outline-none leading-5 px-7 py-3 text-center text-gray-1200 text-gray-1200 leading leading-7 block w-full items-center',
        blockTabSelected:
          'bg-white capitalize flex focus:outline-none leading-5 px-7 py-3 text-center text-primary-1300 leading leading-7 block w-full items-center',
        listingPrimaryInverted:
          'w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out w-full inline-flex justify-center py-2 px-4 hover:border-t hover:border-b border-primary-300 bg-white text-sm font-medium text-primary-700 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out hover:bg-primary-200 hover:text-primary-900',
        neutral:
          'focus:outline-none duration-150 ease-in-out transition w-full my-auto flex  py-2 px-2 text-sm font-medium transition duration-150 ease-in-out',
        navPrimary: 'flex text-primary-700 select-none focus:outline-none',
        navPrimary1:
          'flex bg-blue-1600 select-none text-white text-sm py-2 px-2.5 rounded-sm leading-5',
        subNav:
          'transition-colors duration-300 ease-in-out flex focus:bg-primary-700 focus:outline-none font-medium hover:bg-primary-800 hover:text-white items-center leading-5 mt-2 px-2 py-2 rounded-sm text-sm transition w-full',
        subNav2:
          'transition-colors duration-300 ease-in-out flex  focus:outline-none   hover:text-white items-center leading-5  px-2 py-1.5  rounded-sm text-sm transition w-full',
        subNav3:
          'transition-colors duration-300 ease-in-out flex  focus:outline-none   hover:text-white items-center leading-5  px-2  rounded-sm  transition w-full',
        nav: 'w-full flex items-center px-2 py-2 text-sm leading-5 font-medium text-white focus:outline-none transition ease-in-out duration-150',
        primary:
          'border-transparent bg-primary-600 shadow-md w-full my-auto flex justify-center py-2 px-2 border text-sm font-medium rounded-sm transition duration-150 ease-in-out hover:bg-primary-500 active:bg-primary-700 text-white transition duration-150 ease-in-out focus:outline-none',
        primary1:
          'border-transparent bg-primary-600 shadow-md w-full my-auto flex justify-center px-2 border text-sm font-medium rounded-sm transition duration-150 ease-in-out hover:bg-primary-500 active:bg-primary-700 text-white transition duration-150 ease-in-out focus:outline-none',
        primary2:
          'uppercase border-transparent bg-blue-500 shadow-md w-full my-auto flex py-2 px-4 text-13 font-normal rounded-sm transition duration-150 ease-in-out  active:bg-blue-500 text-white transition duration-150 ease-in-out focus:outline-none',
        gray: 'border-transparent bg-gray-1100 shadow-md w-full my-auto flex justify-center py-2 px-2 border text-sm font-medium rounded-sm transition duration-150 ease-in-out hover:bg-gray-2100 active:bg-gray-1100 text-white transition duration-150 ease-in-out focus:outline-none',
        hoverOne:
          'flex justify-center active:bg-primary-700 bg-white duration-150 ease-in-out font-medium px-4 py-2 text-primary-600 text-sm font-bold rounded-sm transition focus:outline-none hover:bg-primary-600 hover:shadow-md hover:text-white',
        active:
          'flex justify-center active:bg-primary-700 bg-primary-600 duration-150 ease-in-out font-medium px-4 py-2 text-white text-sm font-bold rounded-sm transition focus:outline-none hover:shadow',
        secondary:
          ' flex justify-center active:bg-primary-700 bg-primary-600 border border-transparent duration-150 ease-in-out font-medium hover:bg-primary-700 px-2 py-1 rounded-sm shadow-md text-white transition focus:outline-none',
        primaryInverted:
          'shadow-md w-full my-auto flex justify-center py-2 px-2 border text-sm font-medium rounded-sm transition duration-150 ease-in-out w-full inline-flex justify-center py-2 px-4 border border-primary-300 rounded-sm bg-white text-sm font-medium text-primary-500 hover:text-primary-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out',
        primaryInverted1:
          'uppercase w-full my-auto flex py-2 px-4 text-13 font-normal rounded-sm transition duration-150 ease-in-out w-full inline-flex rounded-sm text-sm font-medium text-gray-1600 focus:outline-none transition duration-150 ease-in-out',
        alert:
          'shadow-md w-full my-auto flex justify-center py-2 px-2 border text-sm font-medium rounded-sm transition duration-150 ease-in-out w-full inline-flex justify-center py-2 px-4 border border-yellow-300 rounded-sm bg-white text-sm font-medium text-yellow-500 hover:text-yellow-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out',
        danger:
          'border-transparent bg-danger-500 shadow-md w-full my-auto flex justify-center py-2 px-2 border text-sm font-medium rounded-sm transition duration-150 ease-in-out hover:bg-danger-600 hover:border-danger-700 active:bg-danger-700 text-white',
        dangerInverted:
          'shadow-md w-full my-auto flex justify-center py-2 px-2 border text-sm font-medium rounded-sm transition duration-150 ease-in-out w-full inline-flex justify-center py-2 px-4 border border-danger-300 rounded-sm bg-white text-sm font-medium text-danger-500 hover:text-danger-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out',
        plain:
          ' flex justify-center  border border-primary-300 duration-150 ease-in-out font-normal   px-4 py-2 rounded-sm  text-primary-700 transition focus:outline-none',
      },
    },
  })
}
