
import sys
from datetime import datetime

def iniciar_nova_tarefa(nome_da_tarefa):
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    header = f"""
======================================================================
| TAREFA INICIADA: {nome_da_tarefa}
| TIMESTAMP: {timestamp}
======================================================================
"""

    try:
        with open("eskb/relatorios/relatorio_geral.txt", "a", encoding="utf-8") as f:
            f.write(header)
        with open("eskb/erros/log_de_erros.txt", "a", encoding="utf-8") as f:
            f.write(header)
        print(f"Tarefa '{nome_da_tarefa}' iniciada com sucesso. Logs registrados.")
    except IOError as e:
        print(f"Erro ao escrever nos arquivos de log: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        nome_da_tarefa = " ".join(sys.argv[1:])
        iniciar_nova_tarefa(nome_da_tarefa)
    else:
        print("Erro: O nome da tarefa não foi fornecido.")
        print("Uso: python iniciar_tarefa.py <Nome completo e descritivo da tarefa>")
