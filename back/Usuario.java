public class Usuario {

    private int idUsuario;
    private String nome;
    private String email;
    private int telefone;
    private String cargo;
    private String senha;


    public void Usuario(int idUsuario, String nome, String email, int telefone, String cargo, String senha) {
        this.idUsuario = idUsuario;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.cargo = cargo;
        this.senha = senha;
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

    public int setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }

    public int getTelefone() {
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

    public void setTelefone(int telefone) {
        this.telefone = telefone;
    }

    public String cadastrarUsuario(String nome, String email, int telefone, String cargo, String senha) {

    }

    public String alterarUsuario() {

    }

    public String deletarUsuario() {

    }
}