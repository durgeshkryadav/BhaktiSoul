Set objFSO = CreateObject("Scripting.FileSystemObject")
Set objShell = CreateObject("WScript.Shell")

outputFileName = "../../sass/global/_svgs.scss"
svgDirectory = objFSO.GetParentFolderName (WScript.ScriptFullName)
svgContent =""

ProcessSVGFiles objFSO.GetFolder(svgDirectory)

Set objOutputFile = objFSO.CreateTextFile (outputFileName, True)
objOutputFile.WriteLine svgContent
objOutputFile.Close

objShell.Popup "SCSS file '" & outputFileName & "' generated.", 3, "Script Finished", 64

Sub ProcessSVGFiles (objFolder)
    For Each objFile In objFolder.Files
        If LCase(objFSO.GetExtensionName(objFile.Name)) = "svg" Then 
            variableName = "svg_" & objFSO.GetBaseName(objFile.Name)
            svgContent = svgContent & "$" & variableName & ": ""data:image/svg+xml," & ProcessSVGFile(objFile.Path) & """;" & vbCrLf
        End if
    Next

    For Each objSubfolder In objFolder.Subfolders
        ProcessSVGFiles objSubfolder

    Next
End Sub

Function ProcessSVGFile(svgPath)
    Set objSVGFile = objFSO.OpenTextFile(svgPath)
    svgContent = objSVGFile.ReadAll
    objSVGFile.Close

    svgContent = Replace(svgContent, vbLf, "")
    svgContent = Replace(svgContent, vbCr, " ")

    svgContent = Replace(svgContent, "<", "%3C")
    svgContent = Replace(svgContent, ">", "%3E")
    svgContent = Replace(svgContent, """", "'")

    ProcessSVGFile = svgContent
End Function