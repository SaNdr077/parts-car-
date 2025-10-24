// სექციების ანიმაცია
        window.addEventListener('load', () => {
            const sections = document.querySelectorAll('section');
            sections.forEach((section, index) => {
                setTimeout(() => {
                    section.classList.add('visible');
                }, index * 300);
            });
        });

        // სმუს სკროლი
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        let currentLang = 'ka';

    // Alert message translations
    const alertMessages = {
      ka: 'შეტყობინება ვერ გაგზავნა! გთხოვთ დაგვიკავშირდით მითითებულ ტელეფონის ნომერზე: +995593901200.',
      en: 'Message could not be sent! Please contact us at the provided phone number: +995593901200.',
      ru: 'Сообщение не отправлено! Пожалуйста, свяжитесь с нами по указанному номеру телефона: +995593901200.'
    };

    // Form submission simulation
    document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault();
      alert(alertMessages[currentLang]);
      e.target.reset();
    });

    // Language switcher function
    function setLang(lang) {
      currentLang = lang;

      // Update text content for elements with data attributes
      document.querySelectorAll('[data-ka], [data-en], [data-ru]').forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) {
          el.textContent = text;
        }
      });

      // Update HTML lang attribute
      document.documentElement.lang = lang;

      // Update form placeholders
      const placeholders = {
        ka: { name: 'თქვენი სახელი', email: 'თქვენი ელ.ფოსტა', message: 'შეტყობინება' },
        en: { name: 'Your name', email: 'Your email', message: 'Message' },
        ru: { name: 'Ваше имя', email: 'Ваш email', message: 'Сообщение' }
      };

      const inputs = document.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        if (input.type === 'text') {
          input.placeholder = placeholders[lang].name;
        } else if (input.type === 'email') {
          input.placeholder = placeholders[lang].email;
        } else if (input.tagName === 'TEXTAREA') {
          input.placeholder = placeholders[lang].message;
        }
      });

      // Highlight active language button
      const buttons = document.querySelectorAll('.lang-switcher .btn');
      buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick') === `setLang('${lang}')`) {
          btn.classList.add('active');
        }
      });
    }

    // Set default language to Georgian on page load
    document.addEventListener('DOMContentLoaded', () => {
      setLang('ka');
    });