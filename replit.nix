{ pkgs }: {
  description = "A basic repl.it environment";
  deps = [
    pkgs.nodejs-18_x
    pkgs.nodePackages.typescript-language-server
  ];
}
