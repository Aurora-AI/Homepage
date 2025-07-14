import os

def gerar_estrutura_md(base_path, md_file, indent=""):
    for item in sorted(os.listdir(base_path)):
        full_path = os.path.join(base_path, item)
        if os.path.isdir(full_path):
            md_file.write(f"{indent}- 📁 **{item}/**\n")
            gerar_estrutura_md(full_path, md_file, indent + "  ")
        else:
            size = os.path.getsize(full_path)
            ext = os.path.splitext(item)[1].lower() or "[sem extensão]"
            md_file.write(f"{indent}- 📄 `{item}` ({size} bytes, {ext})\n")

if __name__ == "__main__":
    ROOT_FOLDER = "."  # Altere se quiser apontar para outro caminho
    with open("estrutura_projeto.md", "w", encoding="utf-8") as md:
        md.write(f"# 📦 Estrutura do Projeto\n\n")
        gerar_estrutura_md(ROOT_FOLDER, md)
    print("✅ Arquivo estrutura_projeto.md gerado com sucesso.")