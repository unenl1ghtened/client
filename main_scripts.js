
       document.addEventListener('DOMContentLoaded', () => {
    const domainPattern = /domain\.com/g;
    const currentDomain = window.location.hostname;

    // This function checks if the node is text or element,
    // then replaces occurrences of "domain.com" with the current domain.
    function processNode(node) {
        // If it's a text node and contains "domain.com"
        if (node.nodeType === Node.TEXT_NODE && domainPattern.test(node.textContent)) {
            node.textContent = node.textContent.replace(domainPattern, currentDomain);

        // If it's an element node, loop over its attributes
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            for (const attr of node.attributes) {
                if (domainPattern.test(attr.value)) {
                    attr.value = attr.value.replace(domainPattern, currentDomain);
                }
            }
        }
    }

    // Perform a BFS traversal starting from the child nodes of the body
    const queue = Array.from(document.body.childNodes);

    while (queue.length > 0) {
        const current = queue.shift();
        // Process the current node
        processNode(current);

        // Add its child nodes to the queue
        queue.push(...current.childNodes);
    }
        });
    

document.addEventListener("DOMContentLoaded", () => {
    const observer = new MutationObserver(() => {
        document
            .querySelectorAll('[content*="example.com"]')
            .forEach((element) => {
                element.setAttribute(
                    "content",
                    element
                        .getAttribute("content")
                        .replace("example.com", window.location.hostname)
                );
            });
    });

  
    if (document.body) {
        observer.observe(document.body, { childList: true, subtree: true });
    }
});

    