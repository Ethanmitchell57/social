
            (function () {
                var n = now_inl();
                requireLazy(["__bigPipe"], function (bigPipe) {
                    bigPipe.beforePageletArrive("last_response", n);
                });
            })();