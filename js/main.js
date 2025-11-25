// Tech-First DevOps Theme JavaScript

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // ===================================
    // Terminal Typing Animation
    // ===================================
    const terminalContent = document.getElementById('terminal-content');

    const commands = [
        { type: 'input', text: 'kubectl get pods --namespace=production' },
        { type: 'output', text: 'NAME                              READY   STATUS    RESTARTS   AGE\napi-gateway-7f8b9c4d5e-x1y2z      1/1     Running   0          2d\nauth-service-6a5b4c3d2e-a1b2c     1/1     Running   0          2d\ndatabase-primary-0                1/1     Running   0          5d' },
        { type: 'input', text: 'terraform plan' },
        { type: 'output', text: 'Terraform used the selected providers to generate the following execution plan.\n\n  + aws_eks_node_group.main\n      id:                    <computed>\n      cluster_name:          "production-cluster"\n      node_role_arn:         "arn:aws:iam::123456789012:role/eks-node-role"\n      scaling_config.0.max_size: 10\n      scaling_config.0.min_size: 3\n\nPlan: 1 to add, 0 to change, 0 to destroy.' },
        { type: 'input', text: 'git push origin main' },
        { type: 'output', text: 'Enumerating objects: 15, done.\nCounting objects: 100% (15/15), done.\nDelta compression using up to 8 threads\nCompressing objects: 100% (8/8), done.\nWriting objects: 100% (9/9), 1.24 KiB | 1.24 MiB/s, done.\nTotal 9 (delta 6), reused 0 (delta 0)\nTo github.com:kubectl/infrastructure.git\n   8a2b3c...9d8e7f  main -> main' }
    ];

    let cmdIndex = 0;
    let charIndex = 0;
    let isTyping = false;
    let currentLine = null;

    function createPrompt() {
        const line = document.createElement('div');
        line.className = 'cmd-line';
        line.innerHTML = '<span class="cmd-prompt">user@kubectl:~$</span> <span class="cmd-text"></span><span class="cursor">&nbsp;</span>';
        terminalContent.appendChild(line);
        return line.querySelector('.cmd-text');
    }

    function typeCommand() {
        if (cmdIndex >= commands.length) {
            cmdIndex = 0; // Loop
            terminalContent.innerHTML = '';
            setTimeout(startNextCommand, 1000);
            return;
        }

        const cmd = commands[cmdIndex];

        if (cmd.type === 'input') {
            if (!currentLine) {
                currentLine = createPrompt();
                // Remove previous cursors
                const cursors = terminalContent.querySelectorAll('.cursor');
                cursors.forEach((c, i) => {
                    if (i < cursors.length - 1) c.style.display = 'none';
                });
            }

            if (charIndex < cmd.text.length) {
                currentLine.textContent += cmd.text.charAt(charIndex);
                charIndex++;
                setTimeout(typeCommand, 50 + Math.random() * 50); // Random typing speed
            } else {
                charIndex = 0;
                cmdIndex++;
                currentLine = null;
                setTimeout(startNextCommand, 500);
            }
        } else {
            // Output is instant
            const output = document.createElement('div');
            output.className = 'cmd-output';
            output.textContent = cmd.text;
            terminalContent.appendChild(output);

            // Scroll to bottom
            const terminalBody = document.querySelector('.terminal-body');
            terminalBody.scrollTop = terminalBody.scrollHeight;

            cmdIndex++;
            setTimeout(startNextCommand, 500);
        }
    }

    function startNextCommand() {
        typeCommand();
    }

    // Start the animation
    setTimeout(startNextCommand, 1000);


    // ===================================
    // Stats Counter
    // ===================================
    const statValues = document.querySelectorAll('.stat-value');

    const observerOptions = {
        threshold: 0.5
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.textContent === '0') {
                animateCounter(entry.target);
            }
        });
    }, observerOptions);

    statValues.forEach(stat => statsObserver.observe(stat));

    function animateCounter(element) {
        const target = parseFloat(element.getAttribute('data-target'));
        const duration = 2000;
        const start = 0;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out quart
            const ease = 1 - Math.pow(1 - progress, 4);

            const current = start + (target - start) * ease;

            if (Number.isInteger(target)) {
                element.textContent = Math.floor(current);
            } else {
                element.textContent = current.toFixed(2);
            }

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target; // Ensure final value is exact
            }
        }

        requestAnimationFrame(update);
    }

    // ===================================
    // Smooth Scrolling
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // ===================================
    // Mobile Menu
    // ===================================
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.flexDirection = 'column';
                navLinks.style.background = '#050505';
                navLinks.style.padding = '20px';
                navLinks.style.borderBottom = '1px solid #222';
            }
        });
    }
});
