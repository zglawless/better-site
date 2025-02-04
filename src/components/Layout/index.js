import './index.css';

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const Layout = () => {
    return (
        
        <div className='w-screen h-screen grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 place-items-center'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" precedence="medium"></link>
            <div className=''>
                <p className='bold text-5xl'>Hi, I'm Zak.</p>
                <p className='bold text-5xl'>A web developer.</p>
        
                <div className='flex mx-auto p-5'>
                <a className="fa fa-github click text-4xl p-2"  href="https://github.com/zglawless" target="_blank"></a>
                <a className="fa fa-linkedin-square click text-4xl p-2" href="https://www.linkedin.com/in/zachary-lawless-2926b7279/" target="_blank"></a>
                <a className='fa fa-file p-2' href='./images/resume.pdf' target='_blank'></a>
                </div>
            </div>
            <div className=''>
                <div className='bg-black h-max w-max rounded-3xl flex justify-center items-center'>
                    <p className='text-4xl text-white'>fdsa</p>
                </div>
            </div>
        </div>
    )
}

export default Layout