import React from 'react'
import { toast } from 'react-toastify'

export default function Footer() {
  

        const footerNavs = [
            {
                label: "ENCODERSPRO",
                items: [
                   
                    {
                        href: 'https://ENCODERSPRO.com/certificate_validation',
                        name: 'Certificate Validation'
                    },
                    {
                        href: 'https://ENCODERSPRO.com/contact',
                        name: 'Contact'
                    },
                    {
                        href: 'https://ENCODERSPRO.com/pages/about',
                        name: 'Courses'
                    },
                    {
                        href: 'https://ENCODERSPRO.com/login',
                        name: 'Become a Instructor'
                    },
                ],
            },
            {
                label: "Important Links",
                items: [
                    {
                        href: 'https://ENCODERSPRO.com/register',
                        name: 'Enroll'
                    },
                    {
                        href: 'https://ENCODERSPRO.com/login',
                        name: 'Login'
                    },
                    {
                        href: 'https://ENCODERSPRO.com/register',
                        name: 'Register'
                    },
                    {
                        href: 'https://ENCODERSPRO.com/certificate_validation',
                        name: 'Certificate Validation'
                    },
                ],
            },
            {
                label: "About",
                items: [
                    {
                        href: 'https://ENCODERSPRO.com/pages/about',
                        name: 'About us'
                    },
                    {
                        href: 'https://ENCODERSPRO.com/contact',
                        name: 'Contact'
                    },
                    {
                        href: 'mailto:info@ENCODERSPRO.com',
                        name: 'Mail'
                    },                   
                    {
                        href: 'https://ENCODERSPRO.com/pages/terms',
                        name: 'Terms and Conditions'
                    },
                   
                ]
            }
        ]
    
        return (
            <footer className="text-gray-500  lg:px-20 bg-white px-4 py-5 w-full md:px-8">
                <div className="gap-6 justify-between md:flex">
                    <div className="flex-1">
                        <div id="#HeroSection"className="max-w-xs">
                        <svg className='my-3' width="260" height="32" viewBox="0 0 260 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="16" fill="#5A30FF" />
                            <path d="M23.3486 21.0648C23.3486 15.7283 23.3486 12.7364 23.3486 7.3999H8.8139V23.3418M23.3486 21.0648V24.7999C23.3486 24.7999 11.8951 24.7999 10.0658 24.7999C9.28576 24.7999 8.89088 24.1209 8.8139 23.3418M23.3486 21.0648C23.3486 21.0648 11.6061 21.0648 10.0658 21.0648C9.18218 21.0648 8.71035 22.2938 8.8139 23.3418M22.193 22.8868H10.0658M17.9579 10.3151L14.3003 17.8763" stroke="white" stroke-linecap="round" />
                            <path d="M13.7224 12.228L11.7974 14.05L13.7224 15.9631" stroke="white" stroke-linecap="round" />
                            <path d="M18.7278 15.9629L20.6528 14.1409L18.7278 12.2278" stroke="white" stroke-linecap="round" />
                            <path d="M44.321 26V8.54545H56.4915V11.9716H48.5398V15.5511H55.8693V18.9858H48.5398V22.5739H56.4915V26H44.321ZM73.9886 8.54545V26H70.4091L63.4631 15.9261H63.3523V26H59.1335V8.54545H62.7642L69.6335 18.6023H69.7784V8.54545H73.9886ZM92.4851 14.8693H88.2237C88.1669 14.4318 88.0504 14.0369 87.8743 13.6847C87.6982 13.3324 87.4652 13.0312 87.1754 12.7812C86.8857 12.5312 86.5419 12.3409 86.1442 12.2102C85.7521 12.0739 85.3175 12.0057 84.8402 12.0057C83.9936 12.0057 83.2635 12.2131 82.6499 12.6278C82.0419 13.0426 81.5732 13.642 81.2436 14.4261C80.9197 15.2102 80.7578 16.1591 80.7578 17.2727C80.7578 18.4318 80.9226 19.4034 81.2521 20.1875C81.5874 20.9659 82.0561 21.554 82.6584 21.9517C83.2663 22.3437 83.9851 22.5398 84.8146 22.5398C85.2805 22.5398 85.7038 22.4801 86.0845 22.3608C86.4709 22.2415 86.8089 22.0682 87.0987 21.8409C87.3942 21.608 87.6357 21.3267 87.8232 20.9972C88.0163 20.6619 88.1499 20.2841 88.2237 19.8636L92.4851 19.8892C92.4112 20.6619 92.1868 21.4233 91.8118 22.1733C91.4425 22.9233 90.9339 23.608 90.2862 24.2273C89.6385 24.8409 88.8487 25.3295 87.9169 25.6932C86.9908 26.0568 85.9283 26.2386 84.7294 26.2386C83.1499 26.2386 81.7351 25.892 80.4851 25.1989C79.2408 24.5 78.2578 23.483 77.5362 22.1477C76.8146 20.8125 76.4538 19.1875 76.4538 17.2727C76.4538 15.3523 76.8203 13.7244 77.5533 12.3892C78.2862 11.054 79.2777 10.0398 80.5277 9.34659C81.7777 8.65341 83.1783 8.30682 84.7294 8.30682C85.7862 8.30682 86.7635 8.45455 87.6612 8.75C88.5589 9.03977 89.3487 9.46591 90.0305 10.0284C90.7124 10.5852 91.2663 11.2699 91.6925 12.0824C92.1186 12.8949 92.3828 13.8239 92.4851 14.8693ZM111.374 17.2727C111.374 19.1932 111.004 20.821 110.266 22.1562C109.527 23.4915 108.527 24.5057 107.266 25.1989C106.01 25.892 104.601 26.2386 103.038 26.2386C101.47 26.2386 100.058 25.8892 98.8026 25.1903C97.5469 24.4915 96.5497 23.4773 95.8111 22.1477C95.0781 20.8125 94.7116 19.1875 94.7116 17.2727C94.7116 15.3523 95.0781 13.7244 95.8111 12.3892C96.5497 11.054 97.5469 10.0398 98.8026 9.34659C100.058 8.65341 101.47 8.30682 103.038 8.30682C104.601 8.30682 106.01 8.65341 107.266 9.34659C108.527 10.0398 109.527 11.054 110.266 12.3892C111.004 13.7244 111.374 15.3523 111.374 17.2727ZM107.061 17.2727C107.061 16.1364 106.899 15.1761 106.575 14.392C106.257 13.608 105.797 13.0142 105.195 12.6108C104.598 12.2074 103.879 12.0057 103.038 12.0057C102.203 12.0057 101.484 12.2074 100.882 12.6108C100.28 13.0142 99.8168 13.608 99.4929 14.392C99.1747 15.1761 99.0156 16.1364 99.0156 17.2727C99.0156 18.4091 99.1747 19.3693 99.4929 20.1534C99.8168 20.9375 100.28 21.5312 100.882 21.9347C101.484 22.3381 102.203 22.5398 103.038 22.5398C103.879 22.5398 104.598 22.3381 105.195 21.9347C105.797 21.5312 106.257 20.9375 106.575 20.1534C106.899 19.3693 107.061 18.4091 107.061 17.2727ZM120.288 26H113.837V8.54545H120.28C122.058 8.54545 123.589 8.89489 124.874 9.59375C126.163 10.2869 127.158 11.2869 127.857 12.5938C128.555 13.8949 128.905 15.4517 128.905 17.2642C128.905 19.0824 128.555 20.6449 127.857 21.9517C127.163 23.2585 126.172 24.2614 124.882 24.9602C123.592 25.6534 122.061 26 120.288 26ZM118.055 22.4034H120.126C121.104 22.4034 121.93 22.2386 122.607 21.9091C123.288 21.5739 123.803 21.0312 124.149 20.2812C124.501 19.5256 124.678 18.5199 124.678 17.2642C124.678 16.0085 124.501 15.0085 124.149 14.2642C123.797 13.5142 123.277 12.9744 122.589 12.6449C121.908 12.3097 121.067 12.142 120.067 12.142H118.055V22.4034ZM131.368 26V8.54545H143.538V11.9716H135.587V15.5511H142.916V18.9858H135.587V22.5739H143.538V26H131.368ZM146.18 26V8.54545H153.391C154.697 8.54545 155.825 8.78125 156.774 9.25284C157.729 9.71875 158.464 10.3892 158.982 11.2642C159.499 12.1335 159.757 13.1648 159.757 14.358C159.757 15.5682 159.493 16.5966 158.964 17.4432C158.436 18.2841 157.686 18.9261 156.714 19.3693C155.743 19.8068 154.592 20.0256 153.263 20.0256H148.703V16.7017H152.479C153.115 16.7017 153.646 16.6193 154.072 16.4545C154.504 16.2841 154.831 16.0284 155.053 15.6875C155.274 15.3409 155.385 14.8977 155.385 14.358C155.385 13.8182 155.274 13.3722 155.053 13.0199C154.831 12.6619 154.504 12.3949 154.072 12.2188C153.641 12.0369 153.109 11.946 152.479 11.946H150.399V26H146.18ZM156.007 18.0227L160.354 26H155.751L151.49 18.0227H156.007ZM171.506 13.7784C171.449 13.1534 171.196 12.6676 170.747 12.321C170.304 11.9688 169.67 11.7926 168.847 11.7926C168.301 11.7926 167.847 11.8636 167.483 12.0057C167.119 12.1477 166.847 12.3438 166.665 12.5938C166.483 12.8381 166.389 13.1193 166.384 13.4375C166.372 13.6989 166.423 13.929 166.537 14.1278C166.656 14.3267 166.827 14.5028 167.048 14.6562C167.276 14.804 167.548 14.9347 167.866 15.0483C168.185 15.1619 168.543 15.2614 168.94 15.3466L170.44 15.6875C171.304 15.875 172.065 16.125 172.724 16.4375C173.389 16.75 173.946 17.1222 174.395 17.554C174.849 17.9858 175.193 18.483 175.426 19.0455C175.659 19.608 175.778 20.2386 175.784 20.9375C175.778 22.0398 175.5 22.9858 174.949 23.7756C174.398 24.5653 173.605 25.1705 172.571 25.5909C171.543 26.0114 170.301 26.2216 168.847 26.2216C167.386 26.2216 166.114 26.0028 165.028 25.5653C163.943 25.1278 163.099 24.4631 162.497 23.571C161.895 22.679 161.585 21.5511 161.568 20.1875H165.608C165.642 20.75 165.793 21.2188 166.06 21.5938C166.327 21.9688 166.693 22.2528 167.159 22.446C167.631 22.6392 168.176 22.7358 168.795 22.7358C169.364 22.7358 169.847 22.6591 170.244 22.5057C170.648 22.3523 170.957 22.1392 171.173 21.8665C171.389 21.5937 171.5 21.2812 171.506 20.929C171.5 20.5994 171.398 20.3182 171.199 20.0852C171 19.8466 170.693 19.642 170.278 19.4716C169.869 19.2955 169.347 19.1335 168.71 18.9858L166.886 18.5597C165.375 18.2131 164.185 17.6534 163.315 16.8807C162.446 16.1023 162.014 15.0511 162.02 13.7273C162.014 12.6477 162.304 11.7017 162.889 10.8892C163.474 10.0767 164.284 9.44318 165.318 8.98864C166.352 8.53409 167.531 8.30682 168.855 8.30682C170.207 8.30682 171.381 8.53693 172.375 8.99716C173.375 9.4517 174.151 10.0909 174.702 10.9148C175.253 11.7386 175.534 12.6932 175.545 13.7784H171.506ZM177.915 26V8.54545H185.125C186.432 8.54545 187.56 8.80114 188.509 9.3125C189.463 9.81818 190.199 10.5256 190.716 11.4347C191.233 12.3381 191.491 13.3892 191.491 14.5881C191.491 15.7926 191.227 16.8466 190.699 17.75C190.176 18.6477 189.429 19.3437 188.457 19.8381C187.486 20.3324 186.332 20.5795 184.997 20.5795H180.548V17.2557H184.213C184.849 17.2557 185.381 17.1449 185.807 16.9233C186.239 16.7017 186.565 16.392 186.787 15.9943C187.009 15.5909 187.119 15.1222 187.119 14.5881C187.119 14.0483 187.009 13.5824 186.787 13.1903C186.565 12.7926 186.239 12.4858 185.807 12.2699C185.375 12.054 184.844 11.946 184.213 11.946H182.134V26H177.915ZM193.571 26V8.54545H200.781C202.088 8.54545 203.216 8.78125 204.165 9.25284C205.119 9.71875 205.855 10.3892 206.372 11.2642C206.889 12.1335 207.148 13.1648 207.148 14.358C207.148 15.5682 206.884 16.5966 206.355 17.4432C205.827 18.2841 205.077 18.9261 204.105 19.3693C203.134 19.8068 201.983 20.0256 200.653 20.0256H196.094V16.7017H199.869C200.506 16.7017 201.037 16.6193 201.463 16.4545C201.895 16.2841 202.222 16.0284 202.443 15.6875C202.665 15.3409 202.776 14.8977 202.776 14.358C202.776 13.8182 202.665 13.3722 202.443 13.0199C202.222 12.6619 201.895 12.3949 201.463 12.2188C201.031 12.0369 200.5 11.946 199.869 11.946H197.79V26H193.571ZM203.398 18.0227L207.744 26H203.142L198.881 18.0227H203.398ZM225.936 17.2727C225.936 19.1932 225.567 20.821 224.828 22.1562C224.089 23.4915 223.089 24.5057 221.828 25.1989C220.572 25.892 219.163 26.2386 217.601 26.2386C216.033 26.2386 214.621 25.8892 213.365 25.1903C212.109 24.4915 211.112 23.4773 210.374 22.1477C209.641 20.8125 209.274 19.1875 209.274 17.2727C209.274 15.3523 209.641 13.7244 210.374 12.3892C211.112 11.054 212.109 10.0398 213.365 9.34659C214.621 8.65341 216.033 8.30682 217.601 8.30682C219.163 8.30682 220.572 8.65341 221.828 9.34659C223.089 10.0398 224.089 11.054 224.828 12.3892C225.567 13.7244 225.936 15.3523 225.936 17.2727ZM221.624 17.2727C221.624 16.1364 221.462 15.1761 221.138 14.392C220.82 13.608 220.359 13.0142 219.757 12.6108C219.161 12.2074 218.442 12.0057 217.601 12.0057C216.766 12.0057 216.047 12.2074 215.445 12.6108C214.842 13.0142 214.379 13.608 214.055 14.392C213.737 15.1761 213.578 16.1364 213.578 17.2727C213.578 18.4091 213.737 19.3693 214.055 20.1534C214.379 20.9375 214.842 21.5312 215.445 21.9347C216.047 22.3381 216.766 22.5398 217.601 22.5398C218.442 22.5398 219.161 22.3381 219.757 21.9347C220.359 21.5312 220.82 20.9375 221.138 20.1534C221.462 19.3693 221.624 18.4091 221.624 17.2727Z" fill="#2E2D2D" />
                        </svg>

                            <p className="leading-relaxed mt-2 text-[15px] ">
                            India's Premier Platform for Cybersecurity, Full-Stack Development, Networking, and Advanced Bug Bounty. Learn from the Best Experts at Affordable Prices. 🚀                            </p>
                        </div>
                        <form 
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <label className="block pt-4 pb-2">
                                Stay up to date
                            </label>
                            <div className="max-w-sm flex items-center border rounded-md p-1">
                                <input 
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full p-2.5 outline-none"
                                />
                                <button onClick={()=> toast.success("Submitted🥳")}
                                    className="p-2.5 rounded-md text-white bg-indigo-600 outline-none shadow-md focus:shadow-none sm:px-5"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
                        {
                            footerNavs.map((item, idx) => (
                                <ul
                                    className="space-y-4"
                                    key={idx}
                                >
                                    <h4 className="text-gray-800 font-medium">
                                        { item.label }
                                    </h4>
                                    {
                                        item.items.map(((el, idx) => (
                                            <li key={idx}>
                                                <a 
                                                    href={el.href}
                                                    className="hover:underline hover:text-indigo-600"
                                                
                                                >
                                                    { el.name }
                                                </a>
                                            </li>
                                        )))
                                    }
                                </ul>
                            ))
                        }
                    </div>
                </div>
                <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
                    <div className="mt-4 sm:mt-0">
                        &copy; 2021 All rights are reserved by <a href='https://ENCODERSPRO.com/' className='text-text-logo'> ENCODERSPRO Private Limited</a>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <ul className="flex items-center space-x-4">
                            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                                <a href="https://www.linkedin.com/company/ENCODERSPRO/">
                                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="#582FFF"></path> <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill="#582FFF"></path> <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" fill="#582FFF"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#582FFF"></path> </g></svg>
                                </a>
                            </li>
    
                            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                                <a href="https://chat.whatsapp.com/H1IivcY8YeG9WUhyrTii5J">
                                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z" fill="#582FFF"></path> </g></svg>
                                </a>
                            </li>
    
                            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                                <a href="https://twitter.com/ENCODERSPRO">
                                    <svg fill="#582fff" width="40px" height="40px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#582fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1643.825 518.606c-14.457 11.294-22.588 28.8-21.685 47.096.565 16.377 1.017 32.753 1.017 49.355 0 530.372-373.497 1079.153-998.513 1079.153-122.203 0-242.598-24.282-355.765-71.153 136.433-22.588 266.428-82.447 374.965-173.816 17.957-15.247 24.62-39.868 16.828-62.005-7.793-22.136-28.574-37.157-52.179-37.722-105.374-2.146-200.81-62.682-256.376-157.214 38.06-1.13 79.059-7.116 109.779-16.038 24.847-7.228 41.562-30.381 40.771-56.132-.903-25.863-19.2-47.774-44.499-53.308-112.15-24.282-194.71-116.781-222.607-243.84 32.076 6.438 62.344 8.47 79.06 8.922 24.62 2.711 47.322-14.456 55.453-38.06 8.02-23.492-.226-49.582-20.442-64.151-78.042-56.245-161.619-161.167-161.619-286.42 0-30.832 3.84-61.326 11.181-90.804 195.163 217.186 461.478 348.31 743.83 363.558 18.975 1.016 34.674-6.438 46.08-19.765 11.408-13.327 15.926-31.398 12.312-48.565-5.648-25.637-8.471-52.178-8.471-79.058 0-188.951 141.063-342.664 314.428-342.664 87.19 0 168.283 37.835 228.141 106.73 13.327 15.36 34.334 22.475 54.212 18.183 28.687-6.099 56.922-13.779 84.706-23.153-16.49 16.715-34.673 31.624-54.438 44.386-22.25 14.343-31.51 42.014-22.475 66.861s34.56 39.868 60.31 36.593c14.683-1.92 29.252-4.179 43.709-7.002-18.297 17.731-37.497 34.447-57.713 50.033m261.685-199.68c-16.716-18.636-43.596-23.83-66.41-13.214-4.066 1.92-8.132 3.84-12.31 5.76 17.054-30.269 30.946-62.683 40.997-96.678 6.777-22.588-1.242-46.984-20.103-61.214-18.974-14.118-44.5-15.247-64.49-2.485-58.277 37.384-120.96 64.828-186.466 82.108-78.268-76.8-181.948-120.17-289.355-120.17-235.595 0-427.37 204.424-427.37 455.606 0 9.487.227 18.974.791 28.348C626 564.008 390.517 424.977 226.64 208.469c-11.52-15.247-30.155-23.04-49.242-22.136-19.2 1.468-36.367 12.536-45.516 29.477-37.157 68.894-56.809 147.614-56.809 227.464 0 86.626 28.687 165.007 70.25 230.739-19.426 9.035-32.98 28.574-32.98 51.388v5.195c0 139.821 49.808 261.91 133.497 344.47-9.035 2.937-17.28 8.246-23.943 15.36a56.566 56.566 0 0 0-12.537 54.326c40.772 136.997 137.788 242.145 258.41 289.807-122.88 69.571-268.688 97.129-404.443 80.753-26.541-3.953-50.485 11.858-59.633 36.028-9.261 24.282-.677 51.84 20.781 66.522 179.69 123.784 387.276 189.29 600.17 189.29 695.717 0 1111.454-606.156 1111.454-1192.095 0-8.583-.113-17.054-.339-25.524 68.555-57.149 127.51-125.365 175.737-203.069 13.214-21.345 10.842-48.903-5.986-67.538" fill-rule="evenodd"></path> </g></svg>
                                </a>
                            </li>
    
                            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                                <a href="https://www.instagram.com/ENCODERSPRO/">
                                  <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#582fff"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#582fff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#582fff"></path> </g></svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <style jsx>{`
                    .svg-icon path,
                    .svg-icon polygon,
                    .svg-icon rect {
                        fill: currentColor;
                    }
                `}</style>
            </footer>
        )
    }