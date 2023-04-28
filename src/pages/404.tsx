import Link from 'next/link';
import React from 'react';

function FourOhFour() {
    return <div className='min-h-screen grid place-items-center'>
        <div className='min-w-[50%]'>
            <div className='bg-white min-w-[50%] p-8 rounded shadow'>
                <h1 className='text-2xl font-medium'>404</h1>
                <p>Diese Seite wurde nicht gefunden.</p>
                <br />
                <hr className='-mx-8'/>
                <br />
                <Link href="/" className='bg-[#96B0B3] rounded shadow px-4 py-3 text-white hover:bg-[#E80381]'>
                    Zurück zur Startseite
                </Link>
            </div>
            <div className='bg-white min-w-[50%] p-8 rounded shadow mt-2'>
                <h1 className='text-2xl font-medium'>404</h1>
                <p>This site was not found.</p>
                <br />
                <hr className='-mx-8'/>
                <br />
                <Link href="/" className='bg-[#96B0B3] rounded shadow px-4 py-3 text-white hover:bg-[#E80381]'>
                    Back to Home
                </Link>
            </div>
        </div>
    </div>
}

export default FourOhFour;
