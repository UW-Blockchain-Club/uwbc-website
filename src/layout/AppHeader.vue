<template>
    <div class="header">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div class="navbar-menu">
                <div class="navbar-start">
                <a class="navbar-item">
                    Home
                </a>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                    Learn
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            What is Bitcoin?
                        </a>
                        <a class="navbar-item">
                            What is Ethereum?
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                            Applications of Blockchain
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                            Curated Content
                        </a>
                    </div>
                </div>

                    <a class="navbar-item">
                    Events
                    </a>

                    <a class="navbar-item">
                    Blog
                    </a>

                </div>

                <div class="navbar-end">
                    <a class="navbar-item">
                    About
                    </a>
                    <a class="navbar-item">
                    Team
                    </a>
                    <a class="navbar-item">
                    Contact
                    </a>

                <div class="navbar-item">
                    <a class="button is-dark is-rounded">
                        Log in
                    </a>
                </div>
                
                </div>
            </div>
        </nav>
    </div>
</template>