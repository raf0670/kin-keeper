import Link from 'next/link';

export default function NotFound() {
    return (
        /* Use min-h-screen and w-full to cover the viewport. 
           Added 'fixed inset-0' to ensure it covers everything including parent margins. */
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#1a362d]">
            
            {/* The main card */}
            <div className="max-w-md w-11/12 text-center space-y-8 p-10 rounded-3xl bg-[#244D3F] shadow-2xl border border-[#2d5d4d]">
                
                <div className="space-y-2">
                    <h1 className="text-8xl font-black text-emerald-500/10">404</h1>
                    <h2 className="text-3xl font-bold text-white uppercase tracking-tight">Lost in Time</h2>
                </div>

                <div className="space-y-3">
                    <p className="text-emerald-100/70">
                        The timeline you are looking for has shifted. This path no longer exists in our records.
                    </p>
                </div>

                <div className="pt-4">
                    <Link 
                        href="/" 
                        className="btn bg-emerald-500 hover:bg-emerald-600 border-none text-[#1F2937] font-bold px-12 rounded-full transition-all hover:scale-105"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>

            {/* Subtle background decoration */}
            <div className="absolute bottom-10 opacity-20">
                 <h1 className="text-2xl font-bold text-white">
                    <span className='text-emerald-200'>Keen</span>Keeper
                </h1>
            </div>
        </div>
    );
}