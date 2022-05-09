public class Usuario {

    private int idUsuario;
    private String nome;
    private String email;
    private String telefone;
    private String cargo;
    private String senha;



    public Usuario(int idUsuario, String nome, String email, String telefone, String cargo, String senha) {
        this.idUsuario = idUsuario;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.cargo = cargo;
        this.senha = senha;
    }

    public Usuario(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getTelefone() {
        return telefone;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public String getEmail() {
        return email;
    }

    public String getSenha() {
        return senha;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String cadastrarUsuario(String nome, String email, String telefone, String cargo, String senha) {
        return "Sucesso!";
    }

    public String alterarUsuario() {
        return " ";
    }

    public String deletarUsuario() {
        return " ";
    }
}