import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid"
import logo from "@/assets/logo.png"

type Props = {}

export function NavBar(props: Props) {
    const flexBetween = "flex items-center justify-between"

    return (
        <nav>
            <div
                className={`${flexBetween} fixed top-0 z-30 w-full py-6 `}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-1`}>
                        {/* LEFT SIDE */}
                        <img alt="logo" src={logo} />
                        <p className=" font-semibold text-white-20 ">LEO CEILING</p>

                        {/* RIGHT SIDE */}
                         <div className={`${flexBetween} w-full pl-10 `}>
                            <div className={`${flexBetween} ml-10 gap-8 text-sm`}>
                                <p>Home</p>
                                <p>About</p>
                                <p>Works</p>
                                <p>Calculeted</p>
                            </div>
                            <div className={`${flexBetween} gap-3`}>
                                <button>Send Work</button>

                            </div>

                         </div>
                    </div>

                </div>
            </div>

        </nav>
    )
}

