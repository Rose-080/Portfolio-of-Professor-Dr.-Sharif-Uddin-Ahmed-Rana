 document.addEventListener('DOMContentLoaded', () => {
            const listItems = document.querySelectorAll('.navigation ul li.list');
            
            function activeLink() {
                listItems.forEach((item) =>
                    item.classList.remove('active'));
                this.classList.add('active');
            }
            
            listItems.forEach((item) =>
                item.addEventListener('click', activeLink));
        });