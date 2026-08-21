document.addEventListener("DOMContentLoaded", () => {

    const filters = document.querySelectorAll(".filter-item");
    const projects = document.querySelectorAll(".project-card");
    const emptyMessage = document.getElementById("emptyProjects");


    filters.forEach(filter => {

        filter.addEventListener("click", () => {

            const selectedCategory = filter.dataset.filter;


            // Cambiar filtro activo

            filters.forEach(item => {
                item.classList.remove("active");
            });

            filter.classList.add("active");


            let visibleProjects = 0;


            projects.forEach(project => {

                const categories =
                    project.dataset.category.split(" ");


                const shouldShow =
                    selectedCategory === "all" ||
                    categories.includes(selectedCategory);


                if (shouldShow) {

                    project.classList.remove("hidden-project");

                    project.classList.add("show-project");

                    visibleProjects++;

                } else {

                    project.classList.remove("show-project");

                    project.classList.add("hidden-project");

                }

            });


            // Empty state

            if (visibleProjects === 0) {

                emptyMessage.classList.remove("hidden");

            } else {

                emptyMessage.classList.add("hidden");

            }

        });

    });



    // Mobile menu

    const mobileMenuBtn =
        document.getElementById("mobileMenuBtn");

    const mobileMenu =
        document.getElementById("mobileMenu");


    if (mobileMenuBtn && mobileMenu) {

        mobileMenuBtn.addEventListener("click", () => {

            mobileMenu.classList.toggle("hidden");

        });

    }


    document
        .querySelectorAll(".mobile-link")
        .forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.add("hidden");

            });

        });

});