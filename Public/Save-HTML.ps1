Function Save-HTML {
    <#
    .SYNOPSIS
    Short description

    .DESCRIPTION
    Long description

    .PARAMETER FilePath
    Parameter description

    .PARAMETER HTML
    Parameter description

    .PARAMETER ShowReport
    Parameter description

    .EXAMPLE
    An example

    .NOTES
    General notes
    #>

    [CmdletBinding()]
    Param
    (
        [Parameter(Mandatory = $false)][string]$FilePath,
        [Parameter(Mandatory = $true)][Array] $HTML,
        [Parameter(Mandatory = $false)][switch]$ShowHTML
    )
    if ([string]::IsNullOrEmpty($FilePath)) {
        $FilePath = Get-FileName -Temporary -Extension 'html'
        Write-Warning "Save-HTML - FilePath parameter $FilePath is empty, using Temporary $FilePath"
    } else {
        if (Test-Path -LiteralPath $FilePath) {
            Write-Warning "Save-HTML - Path $FilePath already exists. Report will be overwritten."
        }
    }
    Write-Verbose "Save-HTML - Saving HTML to file $FilePath"

    $HTML | Set-Content -LiteralPath $FilePath -Force
    Write-Verbose $FilePath
    if ($ShowHTML) {
        #Start-Sleep -Seconds 1
        try {
            Invoke-Item -LiteralPath $FilePath -ErrorAction Stop
        } catch {
            Write-Warning "Save-HTML - couldn't open file $FilePath in a browser."
        }
    }
}