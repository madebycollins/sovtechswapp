import Link from "next/link";
export default function Navbar() {
    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link href="/">
                        <a className="navbar-item">
                            <h1 className="title">Starwars</h1>
                        </a>
                    </Link>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                       data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className="navbar-menu">

                    <div className="navbar-end">
                        <Link href="/">
                            <a className="navbar-item">
                                Home
                            </a>
                        </Link>

                        <Link href="/search">
                            <a className="navbar-item">
                                Search
                            </a>
                        </Link>

                        <Link href="/about">
                            <a className="navbar-item">
                                About
                            </a>
                        </Link>

                    </div>
                </div>
            </nav>
        </div>
    )
}
