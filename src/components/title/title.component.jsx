
const Title = () => {
    return (
        <section className='flex flex-col-reverse justify-self-start items-center font-black sm:flex-row gap-4 p-4 mb-30 z-10'>
            <div className='sm:max-w-screen-md text-center sm:text-left	flex flex-col items-center sm:block'>
              <h1 className='text-4xl md:text-7xl'>Bereitstellung erstklassiger Service- und IT-Lösungen.</h1>
              <p className='text-xl mt-5'>treten Sie einfach mit uns in Kontakt.</p>
              <a href="#contacts" className='block bg-blue-500 rounded-lg px-8 py-3 mt-5 max-w-xs md:w-max'>Kontakt</a>
            </div>
          </section>
    )
}

export default Title;